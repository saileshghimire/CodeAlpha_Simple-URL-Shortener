"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const creatingurl_1 = __importDefault(require("./routes/creatingurl"));
const hittingurl_1 = __importDefault(require("./routes/hittingurl"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.post("/",async (req:Request,res:Response)=>{    
//     const url = req.body;   
//     const shortId = uuidv4();   
//     const shortUrl = `http://localhost:300/${shortId}`;
//     try{
//         const existingUrl = await prisma.table.findFirst({
//             where:{
//                 originalUrl:url.originalUrl
//             },
//             select:{
//                 shortUrl: true
//             }
//         })
//         if(existingUrl){
//             return res.json({
//                 shortUrl: existingUrl.shortUrl
//             })
//         }
//         const newUrl = await prisma.table.create({
//             data:{
//                 originalUrl: url.originalUrl,
//                 shortId:shortId,
//                 shortUrl:shortUrl
//             }
//         })
//         return res.json({
//             shortUrl:newUrl.shortUrl 
//         })
//     } catch(error){
//         console.error(error);
//     return res.status(500).json({ error: 'Failed to create short URL' });
//     }
// });
// app.get('/:shortId', async (req:Request,res:Response)=>{
//     console.log("get called");
//     const { shortId } = req.params;
//     try{
//         const url = await prisma.table.findFirst({
//             where:{
//                 shortId:shortId
//             },
//             select:{
//                 originalUrl:true
//             }
//         });
//         if(!url){
//             return res.status(404).json({ error: 'Short URL not found' });
//         }
//         return res.redirect(url.originalUrl);
//     }catch(error){
//         console.error(error);
//     return res.status(500).json({ error: 'Failed to redirect to original URL' });
//     }
// });
app.use('/api/v1/creatingurl', creatingurl_1.default);
app.use('/', hittingurl_1.default);
const PORT = "3000";
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
