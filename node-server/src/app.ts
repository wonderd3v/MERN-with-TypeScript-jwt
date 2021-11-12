import express, { Application } from 'express';
import env from 'dotenv';
import cors from 'cors';
import authRoutes from "./routes/auth.route";
import coursesRouter from "./routes/course.route"
import morgan from 'morgan';
import path from 'path';

env.config();

const app: Application = express();

// App configs
app.set('port', process.env.PORT);

const corsOptions = {
    exposedHeaders: "auth-token",
};

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use('../uploads', express.static(path.resolve('uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRouter);

export default app;