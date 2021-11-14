Create table dbo.Categoria
(
	CategoriaID int  not null,
	Descricao varchar(60) not null, 
	flagAtivo int,
	primary key(CategoriaID)
)
