import jwt from "jsonwebtoken";
import Config from "../config/env";

interface ILoginData {
  email: string;
  password: string;
}

const createJwtToken = (user: ILoginData): string => {
  const token = jwt.sign(
    {
      data: user,
    },
    Config.secretJwtKey,
    {
      expiresIn: Config.jwtMaxAge,
      algorithm: "HS256",
    }
  );

  return token;
};

export { createJwtToken };
