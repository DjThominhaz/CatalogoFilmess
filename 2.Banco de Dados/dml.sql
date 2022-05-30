USE catalogoFilmesDB;



-- carga inicial usuário admin
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');




-- CSU01:: efetuar login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email			email
  from tb_usuario
 where ds_email 		= 'admin@admin.com.br'
   and ds_senha			= '1234';




-- CSU02:: cadastrar novo filme
INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
     VALUES (1, 'Harry Potter e a Camara Secreta', 'Filme bem tops', 8.2, '2012-02-11', true);



-- CSU02.1:: alterar a imagem
UPDATE tb_filme 
   SET img_filme     = '/storage/filme/asdfasdf.jp'
 WHERE id_filme = 1;



-- CSU03:: alterar filme
UPDATE tb_filme 
   SET nm_filme      = 'Harry Potter e a Pedra Filosofal',
       ds_sinopse    = 'Filme bem tops',
       vl_avaliacao  = 9.5,
       dt_lancamento = '2010-05-03',
       bt_disponivel = true
 WHERE id_filme = 1;




-- CSU04:: remover filme
DELETE FROM tb_filme 
      WHERE id_filme = 1;




-- CSU05:: consultar todos os filmes      
SELECT id_filme			id,
	  nm_filme			nome,
       vl_avaliacao		avaliacao,
       dt_lancamento	lancamento,
       bt_disponivel	disponivel
  FROM tb_filme;
  



-- CSU06:: consultar filmes por nome
SELECT id_filme			id,
	  nm_filme			nome,
       vl_avaliacao		avaliacao,
       dt_lancamento	lancamento,
       bt_disponivel	disponivel
  FROM tb_filme
 WHERE nm_filme			like '%a%';
 


  
-- CSU07:: consultar filme por id
SELECT id_filme		id,
	  nm_filme	     nome,
       vl_avaliacao		avaliacao,
	  ds_sinopse		sinopse,
       dt_lancamento	lancamento,
       bt_disponivel	disponivel,
       img_filme         capa
  FROM tb_filme
 WHERE id_filme			= 1;
    
  

