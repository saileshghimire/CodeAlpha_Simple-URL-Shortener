import express,{ Express,Request,Response} from 'express';
import created from './routes/creatingurl';
import hitting from './routes/hittingurl';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());



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

app.use('/api/v1/creatingurl',created);
app.use('/',hitting);

const PORT = "3000" as string;



app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
