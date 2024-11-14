import { response } from "express";
import { leadsModel } from "../models/lead-model";



export async function getLeads(req: Express.Request, res: any, next: any) {
    try 
    {
        const response = await leadsModel.find();
        if(!response) {
            return res.status(400).json({message: "No leads details are found!", data: {}})
        }
        
       for(let i in response as any) {
            response[i].email = "******@***.com";
       }

        return res.status(200).json({message: "Leads details fetched successfully!", data: response});

    }
    catch(e) {
    next(e);
}
}
