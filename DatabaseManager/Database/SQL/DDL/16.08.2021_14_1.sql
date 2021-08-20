if exists (select 1 from sys.tables where name = 'Produto')
begin

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'Produto' 
	and CONSTRAINT_NAME = 'fk_Produto_Pessoa' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.Produto
		Add constraint fk_Produto_Pessoa foreign key (fk_Fornecedor) references dbo.Pessoa(PessoaID)
	end

end