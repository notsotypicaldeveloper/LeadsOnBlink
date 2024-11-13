import express from "express";
import * as userAuthentication from "../controllers/userAuthentication";

const router = express.Router();

router.post("/signUp", async (req, res) => 
  {
    return userAuthentication.register(req, res);
  });
  
router.post("/login", async (req, res) => {
    
  });


  export {router as userAuthRouter};
