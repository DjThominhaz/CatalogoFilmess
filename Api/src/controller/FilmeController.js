import { inserirFilme } from "../repository/FilmeRepository.js";
import {Router } from 'express'
const server = Router
server.post('/filme' , async(req, resp) =>{
     try {
        const filmeParaInserir = req.body; 

        const filmeinserido = await(filmeParaInserir);
        resp.send(filmeinserido)


     } catch (err) {
         resp.send(400).send({
             erro:err.message
         })
     }
})

