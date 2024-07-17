const express = require("express");
const useCatchErrors = require("../error/catchErrors");
const AuthController = require("../controller/AuthController")
class AuthRoute {
  router = express.Router();

  path = "/auth";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}/api/register`, AuthController.register);
    this.router.post(`${this.path}/api/login`, AuthController.login);
  }
}

module.exports = AuthRoute;
