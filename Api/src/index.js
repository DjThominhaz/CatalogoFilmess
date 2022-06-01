import 'dotenv/config';

import usuarioController from './controller/UsuarioController.js'
import filmeController from './controller/FilmeController.js'

import express from 'express';
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());


server.use('/storage/CapasFilmes', express.static('storage/capasFilmes'));


server.use(usuarioController);
server.use(filmeController)


server.listen(process.env.PORT, () => console.log(`API NA porta: ${process.env.PORT}`));