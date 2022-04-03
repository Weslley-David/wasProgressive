--nome das tabelas criadas por um usuário
select name_qua from quadro where id_usu in(
	select id_usu from usuario where user_name ilike 'claraaa'
);

--nome das colunas de um quadro
select nome_col from coluna where id_usu in(
	select id_usu from usuario where user_name ilike 'claraaa'
);

--acompanhar atividades atribuidas
select * from atividade where id_qua in(
	select id_qua from quadro where id_usu in(
		select id_usu from usuario where user_name ilike 'Claraaa'
	)
);