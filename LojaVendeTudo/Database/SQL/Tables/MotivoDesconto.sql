Create table dbo.MotivoDesconto
(
	MotivoDescontoID int identity not null,
	Descricao varchar(50) not null,
	FlagAtivo int not null,
	primary key(MotivoDescontoID)
)
