import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router/index.js'
import connectDB from './config/db.js';

dotenv.config()

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST','PUT', 'DELETE'],
  credentials: true
}));

// Init Middleware
app.use(express.json());
app.use(cookieParser())


app.use('/api', router);
connectDB();
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5800;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
