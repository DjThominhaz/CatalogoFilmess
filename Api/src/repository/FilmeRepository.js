

import { con } from "./connection.js";

export async function inserirFilme(filme){
    const comando =
        `INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
        VALUES (?, ?, ?, ?, ?, ?)
        `
    const [reposta] = await con.query(comando, [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    filme.id = reposta.insertId;    
    return filme
    }

    export async function alterarImagem(imagem, id){
        const comando=
        `UPDATE tb_filme 
            SET img_filme     =  ?
                WHERE id_filme = ?;`

        const[resposta] = await con.query(comando, [imagem, id]); 
        return resposta.affectedRows
}

export async function listarTodosFilmes(){
    const comando=
    
    `SELECT id_filme		id,
            nm_filme		nome,
            vl_avaliacao	avaliacao,
            dt_lancamento	lancamento,
            bt_disponivel	disponivel
    FROM tb_filme`;

    const  [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarPorId(id){
    const comando=
    
    `SELECT id_filme		id,
            nm_filme		nome,
            vl_avaliacao	avaliacao,
            dt_lancamento	lancamento,
            bt_disponivel	disponivel
    FROM tb_filme
    WHERE id_filme = ? `;

    const  [linhas] = await con.query(comando,[id]);
    return linhas[0];
}