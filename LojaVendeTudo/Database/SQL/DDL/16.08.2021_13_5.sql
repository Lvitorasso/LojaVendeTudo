if not exists (select 1 from sys.tables where name = 'Pedido')
begin
	Create table dbo.Pedido
	(
		PedidoID int identity not null,
		dataPedido datetime not null,
		valorTotal numeric(12,8) not null,
		flagDesconto int not null,
		ValorDesconto numeric (12,8) not null,
		fk_StatusPedido int not null,
		fk_Pessoa int not null,
		fk_MotivoDesconto int not null,
		primary key(PedidoID)
	)
end