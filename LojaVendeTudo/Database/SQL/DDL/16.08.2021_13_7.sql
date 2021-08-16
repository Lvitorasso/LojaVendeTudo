if not exists (select 1 from sys.tables where name = 'Sexo')
begin
	Create table dbo.Sexo
	(
		sexoID int identity not null,
		Descricao varchar(40) not null, 
		primary key(sexoID)
	)
end