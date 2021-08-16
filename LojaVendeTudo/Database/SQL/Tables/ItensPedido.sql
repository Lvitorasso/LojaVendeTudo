Create table dbo.ItensPedido
(
	ItensPedidoID int identity not null,
	valorUnitario numeric(12,8),
	qntProduto int,
	fk_Produto int not null,
	fk_Pedido int not null,
	primary key(ItensPedidoID),
	constraint fk_ItensPedido_Produto foreign key (fk_Produto) references dbo.Produto(ProdutoID),
	constraint fk_ItensPedido_Pedido foreign key (fk_Pedido) references dbo.Pedido(PedidoID)
)