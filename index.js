import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import postRoutes from './routes/posts.js'

const app = express();



app.use(express.json({limit: "30mb",extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes)

app.get('/', (req,res)=>{
        res.send('Hello Friend, I am Mr.Robot')
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`)))
        .catch((error) => console.log(error.message))