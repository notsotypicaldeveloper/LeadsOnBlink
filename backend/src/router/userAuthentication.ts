import express from "express";
import * as userAuthentication from "../controllers/userAuthentication";

const router = express.Router();

router.route("/signUp").post(userAuthentication.register);
router.route("/login").post(userAuthentication.login);

  export {router as userAuthRouter};
