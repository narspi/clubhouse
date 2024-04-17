import Config from "./config/env";
import express from "express";
import session from "express-session";
import { passport } from "./core/passport";
import multer from "multer";
import cors from "cors";
import nanoidPack from "nanoid";
import Code from "./db/models/code";
import Axios from "axios";

const nanoid = nanoidPack.nanoid;

const app = express();
app.use(cors());

declare global {
  namespace Express {
    interface User {
      id: number;
    }
  }
}

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/avatars");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + nanoid(6) + "." + file.mimetype.split("/").pop()
      );
    },
  }),
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    filed: "server is ok",
  });
});

app.post("/upload", upload.single("photo"), (req, res) => {
  const file = req.file;
  if (file?.filename) {
    res.json({
      url: `/avatars/${file.filename}`,
    });
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/rooms",
  }),
  function (req, res) {
    res.send(`
      <h1>loading data</h1>
      <script>window.opener.postMessage(${JSON.stringify(
        req.user
      )},'*');window.close();</script>
    `);
  }
);

const randomCode = () => {
  return Math.floor(Math.random() * (9999 - 1001)) + 1000;
};

app.post("/auth/sms", passport.authenticate("jwt"), async (req, res) => {
  const phone = req.body.phone;

  if (!phone) {
    return res.status(400).send();
  }
  const smsCode = `${randomCode()}`;

  if (req.user && req.user.id) {
    const userId = req.user.id;

    try {
      const data = await Axios.get(
        `https://sms.ru/sms/send?api_id=${Config.smsApiKey}&to=79871268292&msg=${smsCode}&json=1`
      );
      const codeData = await Code.create({
        code: smsCode,
        user_id: userId,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error when sending sms",
      });
    }
  } else {
    return res.status(400).send();
  }
});

app
  .listen(3001, () => {
    console.log("server work!");
  })
  .on("error", (err) => {
    throw new Error("Ошибка какая то");
  });
