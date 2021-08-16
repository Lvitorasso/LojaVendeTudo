if exists (select 1 from sys.tables where name = 'Usuario')
begin

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'Usuario'
	and CONSTRAINT_NAME = 'fk_Usuario_Pessoa' and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.Usuario
		Add constraint fk_Usuario_Pessoa foreign key (fk_Pessoa) references dbo.Pessoa(PessoaID)
	end

end