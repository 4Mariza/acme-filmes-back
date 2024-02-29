create database db_acme_filmes_turma_ba;
use db_acme_filmes_turma_ba;

create table tbl_filme (
	id int not null auto_increment primary key,
    nome varchar(80) not null,
    sinopse text not null,
    duracao time not null,
    data_lancamento date not null,
    data_relancamento date,
    foto_capa varchar(200) not null,
    valor_unitario float,
    
    unique key (id),
    unique index(id)
);

insert into tbl_filme(nome, sinopse, duracao, data_lancamento, foto_capa, valor_unitario) values (
	'Coraline', 
    'Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.',
    '01:40:00',
    '2009-02-13',
    'https://br.web.img2.acsta.net/medias/nmedia/18/87/79/16/19961587.jpg',
    '14.90'
),
(
	'The Handmaiden',
    'Coreia do Sul, anos 1930. Durante a ocupação japonesa, a jovem Sookee (Kim Tae-ri) é contratada para trabalhar para uma herdeira nipônica, Hideko (Kim Min-Hee), que leva uma vida isolada ao lado do tio autoritário. Só que Sookee guarda um segredo: ela e um vigarista planejam desposar a herdeira, roubar sua fortuna e trancafiá-la em um sanatório. Tudo corre bem com o plano, até que Sookee aos poucos começa a compreender as motivações de Hideko.',
    '02:31:00',
    '2017-01-12',
    'https://play.google.com/store/movies/details/The_Handmaiden?id=Qqww4GQTATY&hl=pt&gl=US',
    '45.68'
),
(
	'A Bela e a Fera',
	'Em A Bela e a Fera, moradora de uma pequena aldeia francesa, Bela (Emma Watson) tem o pai capturado pela Fera (Dan Stevens) e decide entregar sua vida ao estranho ser em troca da liberdade dele. No castelo, ela conhece objetos mágicos e descobre que a Fera é, na verdade, um príncipe que precisa de amor para voltar à forma humana.',
    '02:10:00',
    '2017-03-16',
    'https://br.web.img3.acsta.net/c_310_420/pictures/17/01/09/12/22/442219.jpg',
    '37.31'
);

select * from tbl_filme where nome like "C%" or data_lancamento like "2017%";

desc tbl_filme;
show tables;



