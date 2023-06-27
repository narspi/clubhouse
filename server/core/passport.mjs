import passport from "passport";
import * as dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { sequelize } from "../db/core.mjs";
import models from "../../models/index.js";
const user = models.user;
 
dotenv.config();

try {
  await sequelize.authenticate();
  console.log("Соединение с БД было успешно установлено");
} catch (e) {
  console.log("Невозможно выполнить подключение к БД: ", e);
}


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const findUser = await user.findOne({
          where: {
            fullName: profile.displayName
          }
        });
        if (!findUser) {
          const obj = {
            id: 1,
            fullName: profile.displayName,
            avatarUrl: profile.picture,
            isActive: 0,
            userName: profile.displayName,
            phone: '',
          }
          const data = await user.create(obj)
          return done(null,data.toJSON());
        } 
        return done(null,findUser);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  
  user.findOne({ where: { id: id } }).then(function(user) {
      if (user) {
          done(null, user.get());
      } else {
          done(user.errors, null);
      }
  });
});

export { passport };
