if not exists (select 1 from sys.tables where name = 'ItensPedido')
begin
	Create table dbo.ItensPedido
	(
		ItensPedidoID int  not null,
		valorUnitario numeric(12,8),
		qntProduto int,
		fk_Produto int not null,
		fk_Pedido int not null,
		primary key(ItensPedidoID)
	)
end