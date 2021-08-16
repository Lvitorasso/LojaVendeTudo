if not exists (select 1 from sys.tables where name = 'Pessoa')
begin
	Create table dbo.Pessoa
	(
		PessoaID int identity not null,
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
		primary key(PessoaID)
	)
end