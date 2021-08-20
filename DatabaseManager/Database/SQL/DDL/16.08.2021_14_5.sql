if exists (select 1 from sys.tables where name = 'ItensPedido')
begin

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'ItensPedido' 
	and CONSTRAINT_NAME = 'fk_ItensPedido_Produto' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.ItensPedido
		Add constraint fk_ItensPedido_Produto foreign key (fk_Produto) references dbo.Produto(ProdutoID)
	end

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'ItensPedido' 
	and CONSTRAINT_NAME = 'fk_ItensPedido_Pedido' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.ItensPedido
		Add constraint fk_ItensPedido_Pedido foreign key (fk_Pedido) references dbo.Pedido(PedidoID)
	end

end