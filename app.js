import express from 'express';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve static files from 'uploads' directory

// Routes
app.use('/api/v1/images', imageRoutes);

export default app;
