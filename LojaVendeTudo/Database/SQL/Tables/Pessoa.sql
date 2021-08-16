if not exists (select 1 from sys.tables where name = 'Pessoa')
begin
	create table Pessoa
	(
		PessoaID int identity not null,
		Nome
		Sobrenome
		Documento
		Email
		DataCriacao

		primary key(PessoaID)
	)
end