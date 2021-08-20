Create table dbo.Pedido
(
	PedidoID int  not null,
	dataPedido datetime not null,
	valorTotal numeric(12,8) not null,
	flagDesconto int not null,
	ValorDesconto numeric (12,8) not null,
	fk_StatusPedido int not null,
	fk_Pessoa int not null,
	fk_MotivoDesconto int not null,
	primary key(PedidoID),
	constraint fk_Pedido_StatusPedido foreign key (fk_StatusPedido) references dbo.StatusPedido(StatusPedidoID),
	constraint fk_Pedido_Pessoa foreign key (fk_Pessoa) references dbo.Pessoa(PessoaID),
	constraint fk_Pedido_MotivoDesconto foreign key (fk_MotivoDesconto) references dbo.MotivoDesconto(MotivoDescontoID),
)