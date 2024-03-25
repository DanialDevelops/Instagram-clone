import express from "express";
import { PORT, uri } from "./config.js";
import mongoose from "mongoose";
import postRoute from "./routes/postRoute.js";
import userRoute from "./routes/userRoute.js"
import commentRoute from './routes/commentRoute.js'
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}));

// Set up request handler(s)
app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello World');
}); 

app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/comments', commentRoute)



// Connect to MongoDB and start the server
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to database');
        // Start the server
        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });