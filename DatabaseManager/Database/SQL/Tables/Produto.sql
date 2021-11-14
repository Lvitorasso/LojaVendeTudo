Create table dbo.Produto
(
	ProdutoID int  not null,
	Nome varchar(50) not null,
	Descricao varchar(50) not null,		
	Marca varchar(50) not null,
	Fabricante varchar(50) not null,		
	Peso varchar(50) not null,
	PrecoUnitario numeric(12,8) not null,		
	ImgSrc varchar(200) not null,
	fk_Fornecedor int not null,
	fk_Categoria int not null,
	primary key(ProdutoID),
	constraint fk_Produto_Pessoa foreign key (fk_Fornecedor) references dbo.Pessoa(PessoaID),
	constraint fk_Categoria foreign key (fk_Categoria) references dbo.Categoria(CategoriaID)
)
