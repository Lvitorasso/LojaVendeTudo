if not exists (select 1 from sys.tables where name = 'MotivoDesconto')
begin
	create table MotivoDesconto
	(
		MotivoDescontoID int identity not null,
		Descricao varchar(50) not null,
		FlagAtivo int not null,
		primary key(MotivoDescontoID)
	)
end