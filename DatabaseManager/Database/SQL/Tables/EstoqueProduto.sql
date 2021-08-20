Create table dbo.EstoqueProduto
(
	EstoqueProdutoID int  not null,
	qtdDisponivel int,
	DataUltimoRecebimento datetime,
	DataProximoRecebimento datetime,
	fk_Produto int not null unique, 
	primary key(EstoqueProdutoID),
	constraint fk_EstoqueProduto_Produto foreign key (fk_Produto) references dbo.Produto(ProdutoID)
)