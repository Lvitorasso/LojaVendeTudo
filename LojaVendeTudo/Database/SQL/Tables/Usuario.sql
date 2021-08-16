if not exists (select 1 from sys.tables where name = 'Usuario')
begin
	create table Usuario
	(
		UsuarioID int identity not null,
		-- login = (cpf/cnpj+/+documento)
		Login varchar(100) not null,
		DataNascimento dateTime not null,
		DataCriacaoUsuario datetime not null,
		DataUltimoLogin datetime,
		FlagBloqueio int,
		primary key(UsuarioID)
	)
end