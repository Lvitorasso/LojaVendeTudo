Create table dbo.Usuario
(
	UsuarioID int identity not null,
	Login varchar(100) not null,
	DataNascimento dateTime not null,
	DataCriacaoUsuario datetime not null,
	DataUltimoLogin datetime,
	FlagBloqueio int,
	fk_Pessoa int not null unique,
	primary key(UsuarioID),
	constraint fk_Usuario_Pessoa foreign key (fk_Pessoa) references dbo.Pessoa(PessoaID)
)