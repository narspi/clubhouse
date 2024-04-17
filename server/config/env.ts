import * as dotenv from "dotenv";
import { from, logger } from "env-var";

dotenv.config();
const env = from(process.env, {}, logger);

const GOOGLE_CLIENT_ID = env.get("GOOGLE_CLIENT_ID").required().asString();
const GOOGLE_CLIENT_SECRET = env
  .get("GOOGLE_CLIENT_SECRET")
  .required()
  .asString();
const GOOGLE_CALLBACK_URL = env
  .get("GOOGLE_CALLBACK_URL")
  .required()
  .asString();

const SMS_API_KEY = env.get("SMS_API_KEY").required().asString();

const SECRET_JWT_KEY = env.get("SECRET_JWT_KEY").required().asString();
const JWT_MAX_AGE = env.get("JWT_MAX_AGE").required().asString();

const POSTGRES_USER = env.get("POSTGRES_USER").required().asString();
const POSTGRES_PASSWORD = env.get("POSTGRES_PASSWORD").required().asString();
const POSTGRES_DATABASE = env.get("POSTGRES_DATABASE").required().asString();
const POSTGRES_HOST = env.get("POSTGRES_HOST").required().asString();

class Config {
  static clientID = GOOGLE_CLIENT_ID;
  static clientSecret = GOOGLE_CLIENT_SECRET;
  static callbackURL = GOOGLE_CALLBACK_URL;
  static smsApiKey = SMS_API_KEY;
  static secretJwtKey = SECRET_JWT_KEY;
  static jwtMaxAge = JWT_MAX_AGE;
  static postgresUser = POSTGRES_USER;
  static postgresPassword = POSTGRES_PASSWORD;
  static postgresDatabase = POSTGRES_DATABASE;
  static postgresHost = POSTGRES_HOST;
}

export default Config;
