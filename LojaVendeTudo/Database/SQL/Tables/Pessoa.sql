Create table dbo.Pessoa
(
	PessoaID int  not null,
	Nome varchar(30) not null, 
	Sobrenome varchar(60) not null, 
	Documento varchar(20) not null, 
	Email varchar(100) not null, 
	DataCriacao datetime not null, 
	DataNascimento datetime not null,
	Telefone varchar(20),
	Celular varchar(20),
	FlagFornecedor int,
	FlagCliente int,
	fk_Sexo int not null,
	primary key(PessoaID),
	constraint fk_Pessoa_Sexo  foreign key (fk_Sexo) references dbo.Sexo(SexoID)
)