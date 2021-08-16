if not exists (select 1 from sys.tables where name = 'Produto')
begin
	create table Produto
	(
		ProdutoID int identity not null,
		Nome varchar(50) not null,
		Descricao varchar(50) not null,		
		Marca varchar(50) not null,
		Fabricante varchar(50) not null,		
		Peso varchar(50) not null,
		Preco numeric(12,8) not null,
		pk_Fornecedor int not null,
		primary key(ProdutoID)
	)
end