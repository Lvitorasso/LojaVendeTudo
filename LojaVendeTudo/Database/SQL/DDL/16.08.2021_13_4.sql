if not exists (select 1 from sys.tables where name = 'MotivoDesconto')
begin
	Create table dbo.MotivoDesconto
	(
		MotivoDescontoID int  not null,
		Descricao varchar(50) not null,
		PercDesconto numeric(3,8) not null,
		ValorMaxDesconto numeric(12,8) not null,
		FlagAtivo int not null,
		primary key(MotivoDescontoID)
	)
end