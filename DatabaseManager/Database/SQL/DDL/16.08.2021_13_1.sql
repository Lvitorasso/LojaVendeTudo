if not exists (select 1 from sys.tables where name = 'Produto')
begin
	Create table dbo.Produto
	(
		ProdutoID int  not null,
		Nome varchar(50) not null,
		Descricao varchar(50) not null,		
		Marca varchar(50) not null,
		Fabricante varchar(50) not null,		
		Peso varchar(50) not null,
		PrecoUnitario numeric(12,8) not null,
		fk_Fornecedor int not null,
		fk_Categoria int not null,
		primary key(ProdutoID)
	)
end