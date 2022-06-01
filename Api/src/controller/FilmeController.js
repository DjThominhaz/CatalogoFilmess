import { alterarImagem, buscarPorId, inserirFilme, listarTodosFilmes } from "../repository/FilmeRepository.js";
import {Router } from 'express'
import multer from 'multer';

const server = Router();
const upload = multer({dest:'storage/CapasFilmes '})


server.post('/filme' , async(req, resp) =>{
     try {
        const novofilme = req.body; 

        if(!novofilme.nome)
         throw new Error ("Nome do Filme e Obrigatório")

        if(!novofilme.sinopse)
         throw new Error ("Sinopse do Filme e Obrigatório")

         if(!novofilme.avaliacao == undefined || novofilme.avaliacao <0)
         throw new Error ("Avaliação do Filme e Obrigatório")

         if(!novofilme.lancamento)
         throw new Error ("Data de lançamento do Filme e Obrigatório")

         if(!novofilme.disponivel)
         throw new Error ("Disponibilidade do Filme e Obrigatório")

         if(!novofilme.usuario)
         throw new Error ("Usuario nao logado")

        const filmeInserido = await inserirFilme(novofilme);
        resp.send(filmeInserido);


     } catch (err) {
         resp.status(400).send({
             erro:err.message
         })
     }
})


server.put('/filme/:id/capa', upload.single('capa') ,async(req, resp) =>{
    try{
        const { id } = req.params;
        const imagem = req.file.path;
        
        const resposta = await alterarImagem(imagem, id)
        if(resposta != 1)
            throw new Error("A imagem nao pode ser salva")
        
        
        resp.status(204).send();
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/filme', async(req,resp) => {
    try{
        const resposta = await listarTodosFilmes();
        resp.send(resposta);
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/filme/:id', async(req,resp) => {
    try{
        const id = Number(req.params.id);
        const resposta = await buscarPorId(id);

        if (!resposta){
            throw new Error("ID não informado ou incorreto!")
        }

        resp.send(resposta);
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;