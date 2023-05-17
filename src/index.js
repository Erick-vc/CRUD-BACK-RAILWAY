import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import { fileURLToPath } from "url";
import {dirname, join}  from 'path';



import taskRoutes from './routes/tasks.routes.js'

// import { pool } from './db.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());

app.use(express.json());

app.use(taskRoutes);

app.listen(PORT);


console.log(`Server started on port ${PORT}`);
