import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { handleRender } from './helpers';

dotenv.config();
const staticOptions = {
  maxAge: 2592000,
};
const server = express();

server.use(bodyParser.json());

server.use('/build', express.static('build'));
server.use(express.static(path.join(process.cwd(), 'public/client_dist'), staticOptions));
server.use(handleRender);

server.listen(process.env.PORT, () => console.log(`Server ran on :${process.env.PORT}`));
