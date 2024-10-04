import express from 'express';
import userRoutes from './routes/userRoutes';

const PORT = 3333;
const app: express.Application = express();

app.use(express.json());

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`⏳ Connected at ${PORT}`);
});
