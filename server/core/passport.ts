import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Config from "../config/env";
import sequelize from "../db/core";
import User from "../db/models/user";
import { createJwtToken } from "../utils/createJwtToken";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Config.secretJwtKey,
};

(async function main() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e);
  }
})();

passport.use(
  "jwt",
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    done(null, jwt_payload);
  })
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: Config.clientID,
      clientSecret: Config.clientSecret,
      callbackURL: Config.callbackURL,
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const findUser = await User.findOne({
          where: {
            fullName: profile.displayName,
          },
        });
        console.log(findUser);
        if (!findUser) {
          const obj = {
            id: 1,
            fullName: profile.displayName,
            avatarUrl: profile.picture,
            isActive: 0,
            userName: profile.displayName,
            phone: "",
          };
          const data = await User.create(obj);
          return done(null, data.toJSON());
        }
        return done(null, findUser);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  if (user.id) {
    done(null, user.id);
  }
});

passport.deserializeUser(function (id, done) {
  User.findOne({ where: { id: id as number } })
    .then(function (user) {
      if (user) {
        done(null, user.get());
      } else {
        console.log(user);
        done("something went wrong", null);
      }
    })
    .catch(function (err) {
      done(err, null);
    });
});

export { passport };
