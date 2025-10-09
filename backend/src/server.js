import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import gamesRoutes from './routes/gamesRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// tutorial related code
app.use('/api/notes', notesRoutes);
// nuzlocke related code
app.use('/games', gamesRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on PORT: ${port}`);
  });
});
