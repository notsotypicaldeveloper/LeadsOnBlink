import express from "express";
import * as leads from "../controllers/leads";


const router = express.Router();

router.route("/leads").get(leads.getLeads);

export {router as leadsRouter};
