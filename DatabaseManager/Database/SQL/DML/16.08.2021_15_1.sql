if exists (select 1 from sys.tables where name = 'Sexo')
begin

	if not exists(select 1 from dbo.Sexo where descricao = 'Masculino')
	begin
		insert into dbo.Sexo(sexoID, descricao)
		values(next value for SexoID, 'Masculino')
	end

	if not exists(select 1 from dbo.Sexo where descricao = 'Feminino')
	begin
		insert into dbo.Sexo(sexoID, descricao)
		values(next value for SexoID, 'Feminino')
	end

	if not exists(select 1 from dbo.Sexo where descricao = 'Outros')
	begin
		insert into dbo.Sexo(sexoID, descricao)
		values(next value for SexoID, 'Outros')
	end

end