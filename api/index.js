import express from 'express';
import mongoose from 'mongoose';
import userRouter from '../api/routes/user.route.js';
import authRouter from '../api/routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => console.log(error));

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message,
    });
});