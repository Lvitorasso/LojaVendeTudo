Create table dbo.StatusPedido
(
	StatusPedidoID int identity not null,
	Descricao varchar(50) not null,
	FlagPermiteCancelamento int not null,
	primary key(StatusPedidoID)
)