if exists (select 1 from sys.tables where name = 'Pessoa')
begin

	if not exists (select 1 from INFORMATION_SCHEMA.TABLE_CONSTRAINTS where TABLE_NAME = 'Pessoa' 
	and CONSTRAINT_NAME = 'fk_Pessoa_Sexo' 	and TABLE_SCHEMA = 'dbo')
	begin 
		Alter table dbo.Pessoa
		Add constraint fk_Pessoa_Sexo  foreign key (fk_Sexo) references dbo.Sexo(SexoID)
	end

end