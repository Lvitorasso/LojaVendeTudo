if not exists (select 1 from sys.tables where name = 'EstoqueProduto')
begin
	Create table dbo.EstoqueProduto
	(
		EstoqueProdutoID int  not null,
		fk_Produto int not null unique, 
		qtdDisponivel int,
		DataUltimoRecebimento datetime,
		DataProximoRecebimento datetime,		
		primary key(EstoqueProdutoID)
	)
end