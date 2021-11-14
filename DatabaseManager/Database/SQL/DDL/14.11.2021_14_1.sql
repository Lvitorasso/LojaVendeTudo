if not exists (select 1 from sys.tables where name = 'Categoria')
begin
	Create table dbo.Categoria
	(
		CategoriaID int  not null,
		Descricao varchar(60) not null, 
		flagAtivo int,
		primary key(CategoriaID)
	)
end