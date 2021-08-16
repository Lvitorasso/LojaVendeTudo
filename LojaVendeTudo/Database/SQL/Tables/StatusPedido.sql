if not exists (select 1 from sys.tables where name = 'StatusPedido')
begin
	create table StatusPedido
	(
		StatusPedidoID int identity not null,
		Descricao varchar(50) not null,
		FlagPermiteCancelamento int not null,
		primary key(StatusPedidoID)
	)
end