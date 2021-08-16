if exists (select 1 from sys.tables where name = 'EstoqueProduto')
begin

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'EstoqueProduto' 
	and CONSTRAINT_NAME = 'fk_EstoqueProduto_Produto' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.EstoqueProduto
		Add constraint fk_EstoqueProduto_Produto foreign key (fk_Produto) references dbo.Produto(ProdutoID)
	end

end