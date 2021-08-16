if not exists (select 1 from sys.tables where name = 'Pedido')
begin
	create table Pedido
	(
		PedidoID int identity not null,
		dataPedido datetime not null,
		valorTotal numeric(12,8) not null,
		flagDesconto int not null,
		ValorDesconto numeric (12,8) not null,
		pk_StatusPedido int not null,
		pk_ItensPedido int not null,
		pk_Pessoa int not null,
		pk_MotivoDesconto int not null,
		primary key(PedidoID)
	)
end