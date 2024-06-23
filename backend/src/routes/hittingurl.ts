import { Router,Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const hitting:Router = Router();
const prisma = new PrismaClient()

hitting.get('/:shortId', async (req:Request,res:Response)=>{
    const shortId = req.params;
    try{
        const url = await prisma.table.findFirst({
            where:{
                shortId:shortId
            },
            select:{
                originalUrl:true
            }
        });
        if(!url){
            return res.status(404).json({ error: 'Short URL not found' });
        }
        return res.redirect("url");
    }catch(error){
        console.error(error);
    return res.status(500).json({ error: 'Failed to redirect to original URL' });
    }
});

export default hitting;