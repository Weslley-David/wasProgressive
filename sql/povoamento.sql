--cadastro de usuário
insert into usuario values (1, 'joaomr180', '12345', 'Joao Mario Ramos', 'emailgenerico@e-mail.com');
insert into usuario values (2, 'Claraaa', 'ER@2$376/*', 'Clara Juliana Silva', 'emailgenerico2@e-mail.com');
insert into usuario values (3, 'AdolfoXT', 'admin', 'Adolfo Lima Duarte', 'emailgenerico3@e-mail.com');

--processo para criação de um quadro
insert into quadro values(1, 'kanban Tradicional', 1);
insert into coluna values(1, 'todo', 1);
insert into coluna values(2, 'doing', 1);
insert into coluna values(3, 'done', 1);

--processo para criação de um quadro
insert into quadro values(2, 'Reforma', 2);
insert into coluna values(4, 'fazer orçamento', 2);
insert into coluna values(5, 'comprar material', 2);
insert into coluna values(6, 'implementar', 2);
insert into coluna values(7, 'comunicar cliente', 2);

--criação de atividade(task)
insert into atividade values (1, 'Encanamento do Lúcio', 'A pia do Lúcio está entupida, apartamento 202, Edifício Guerra', '2022-05-01', 2, 4, 1);
insert into atividade values (2, 'Atividade de Geografia', 'Realizar uma pesquisa sobre megacidades', '2022-05-01', 1, 1, 2);

--comentarios na atividade
insert into comenta values(1,'O elevador estava quebrado e eu tive de subir 20 lotes de escada', 1, 1);
insert into comenta values(2,'Bom é que já serve como exercício. : )', 2, 1);

--adicionando link a uma atividade
insert into ati_link values(1, 'https://mundoeducacao.uol.com.br/geografia/megacidades.htm#:~:text=O%20termo%20megacidade%20foi%20uma,de%2010%20milhões%20de%20habitantes.', 2);

--adicionando checkbox
insert into checkbox values (1, 'ler o anexo', 2, FALSE);
insert into checkbox values (2, 'fazer resumo', 2, FALSE);
insert into checkbox values (3, 'explicar a pesquisa na frente de 40 pessoas desconhecidas presencialmente', 2, FALSE);
