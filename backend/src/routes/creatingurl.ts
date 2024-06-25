import { Router,Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4} from 'uuid'


const created:Router = Router();

const prisma = new PrismaClient();

created.post("/",async (req:Request,res:Response)=>{
    const url = req.body;   
    const shortId = uuidv4();   
    const shortUrl = `http://localhost:3000/${shortId}`;
    
    try{
        const existingUrl = await prisma.table.findFirst({
            where:{
                originalUrl:url.originalUrl
            },
            select:{
                shortUrl: true
            }
        })
        if(existingUrl){
            return res.json({
                shortUrl: existingUrl.shortUrl
            })
        }
        const newUrl = await prisma.table.create({
            data:{
                originalUrl: url.originalUrl,
                shortId:shortId,
                shortUrl:shortUrl
            }
        })
        return res.json({
            shortUrl:newUrl.shortUrl 
        })

    } catch(error){
        console.error(error);
    return res.status(500).json({ error: 'Failed to create short URL' });
    }
});


export default created;