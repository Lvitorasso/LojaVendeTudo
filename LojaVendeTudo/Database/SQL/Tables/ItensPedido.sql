if not exists (select 1 from sys.tables where name = 'ItensPedido')
begin
	create table ItensPedido
	(
		ItensPedidoID int identity not null,
		valorUnitario numeric(12,8),
		qntProduto int,
		pk_Produto int not null,
		pk_Pedido int not null,
		primary key(ItensPedidoID)
	)
end