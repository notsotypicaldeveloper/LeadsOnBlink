import { leadsModel } from "../models/lead-model";

export async function getLeads(req: Express.Request, res: any, next: any) {
    try 
    {
        const reponse = await leadsModel.find();
        if(!reponse) {
            return res.status(400).json({message: "No leads details are found!", data: {}})
        }
        return res.status(200).json({message: "Leads details fetched successfully!", data: reponse});

    }
    catch(e) {
    next(e);
}
}
