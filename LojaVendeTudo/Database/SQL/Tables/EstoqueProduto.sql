Create table dbo.EstoqueProduto
(
	EstoqueProdutoID int  not null,
	fk_Produto int not null unique, 
	qtdDisponivel int,
	DataUltimoRecebimento datetime,
	DataProximoRecebimento datetime,
	primary key(EstoqueProdutoID),
	constraint fk_EstoqueProduto_Produto foreign key (fk_Produto) references dbo.Produto(ProdutoID)
)