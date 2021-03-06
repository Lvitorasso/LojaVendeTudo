if not exists (select 1 from sys.tables where name = 'Pessoa')
begin
	Create table dbo.Pessoa
	(
		PessoaID int  not null,
		Nome varchar(30) not null, 
		Sobrenome varchar(60) not null, 
		Login varchar(100) not null,
		Documento varchar(20) not null, 
		Email varchar(100) not null, 
		DataCriacao datetime not null, 
		DataNascimento datetime not null,
		DataUltimoLogin datetime,
		Telefone varchar(20),
		Celular varchar(20),
		Senha varchar(100) not null,
		Role varchar(20),
		FlagBloqueio int,
		fk_Sexo int not null,
		primary key(PessoaID)
	)
end