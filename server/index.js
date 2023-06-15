import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import buildingRoutes from './routes/Buildings.js';
import userRoutes from './routes/Users.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/buildings', buildingRoutes);
app.use('/users', userRoutes);


app.get('/', (req, res) => res.send('get'));

const CONNECTION_URL = 'mongodb+srv://user:userPass123@cluster0.nb6xkrq.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);


