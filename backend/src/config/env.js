const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const LOCAL_MYSQL = "mysql://root:@localhost:3306/voice_lesson_app";

const ENV = {
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl:
    process.env.NODE_ENV === "development"
      ? LOCAL_MYSQL
      : process.env.DATABASE_URL,
  backendURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : `https://`,
  smtpUsername: process.env.SMTP_USER,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
};

module.exports = ENV;
