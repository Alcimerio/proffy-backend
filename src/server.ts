import express from 'express';

const app = express();

app.use(express.JSON());

app.listen(3333);