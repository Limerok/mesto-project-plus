import express, { Request, Response } from 'express';
import mongoose from 'mongoose';


const { PORT = 3000 } = process.env;
const app = express();



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});