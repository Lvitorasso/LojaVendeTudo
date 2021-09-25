if not exists (select 1 from sys.tables where name = 'Usuario')
begin
	Create table dbo.Usuario
	(
		UsuarioID int  not null,
		Login varchar(100) not null,
		DataCriacaoUsuario datetime not null,
		DataUltimoLogin datetime,
		FlagBloqueio int,
		fk_Pessoa int not null unique,
		primary key(UsuarioID)
	)
end