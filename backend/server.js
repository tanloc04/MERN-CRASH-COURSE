import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

//allows us to use .env file that contain connection string
dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to accept JSON data in req.body 

app.use("/api/products", productRoutes); //points to the route directory that contain apis function



app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});

