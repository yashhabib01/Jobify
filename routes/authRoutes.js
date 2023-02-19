import express from "express";
const authRouter = express.Router();
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message:
    "Too many request from this Ip address , please try again after 15 minutes",
});

import { login, regsiter, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";
authRouter.route("/register").post(apiLimiter, regsiter);
authRouter.route("/login").post(apiLimiter, login);
authRouter.route("/updateUser").patch(authenticateUser, testUser, updateUser);
export default authRouter;
