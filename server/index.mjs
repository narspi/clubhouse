import express from "express";
import session from "express-session";
import { passport } from "./core/passport.mjs";
import multer from "multer";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
app.use(cors());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/avatars");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + nanoid(6) + '.' + file.mimetype.split('/').pop());
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

app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    url: `/avatars/${req.file.filename}`
  });
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

app.listen(3001, (err) => {
  if (err) {
    throw new Error("Ошибка какая то");
  }
  console.log("server work!");
});
