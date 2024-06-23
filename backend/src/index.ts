import express,{ Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import created from './routes/creatingurl';
import hitting from './routes/hittingurl';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1/creatingurl',created);
app.use('/',hitting);

const PORT = process.env.PORT as string

console.log(PORT);

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
