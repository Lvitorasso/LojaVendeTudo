if exists (select 1 from sys.tables where name = 'Pedido')
begin

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'Pedido' 
	and CONSTRAINT_NAME = 'fk_Pedido_StatusPedido' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.Pedido
		Add constraint fk_Pedido_StatusPedido foreign key (fk_StatusPedido) references dbo.StatusPedido(StatusPedidoID)
	end

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'Pedido' 
	and CONSTRAINT_NAME = 'fk_Pedido_Pessoa' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.Pedido
		Add constraint fk_Pedido_Pessoa foreign key (fk_Pessoa) references dbo.Pessoa(PessoaID)
	end

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'Pedido' 
	and CONSTRAINT_NAME = 'fk_Pedido_MotivoDesconto' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.Pedido
		Add constraint fk_Pedido_MotivoDesconto foreign key (fk_MotivoDesconto) references dbo.MotivoDesconto(MotivoDescontoID)
	end

end