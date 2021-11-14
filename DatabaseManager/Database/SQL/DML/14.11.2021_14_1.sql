if exists (select 1 from sys.tables where name = 'Categoria')
begin

	if not exists(select 1 from dbo.Categoria where descricao = 'Alimentos')
	begin
		insert into dbo.Categoria(CategoriaID, descricao, flagAtivo)
		values(next value for CategoriaID, 'Alimentos', 1)
	end

	if not exists(select 1 from dbo.Categoria where descricao = 'Frutas')
	begin
		insert into dbo.Categoria(CategoriaID, descricao, flagAtivo)
		values(next value for CategoriaID, 'Frutas', 1)
	end

	if not exists(select 1 from dbo.Categoria where descricao = 'Legumes')
	begin
		insert into dbo.Categoria(CategoriaID, descricao, flagAtivo)
		values(next value for CategoriaID, 'Legumes', 1)
	end
	
	if not exists(select 1 from dbo.Categoria where descricao = 'Eletronicos')
	begin
		insert into dbo.Categoria(CategoriaID, descricao, flagAtivo)
		values(next value for CategoriaID, 'Eletronicos', 1)
	end
	
	if not exists(select 1 from dbo.Categoria where descricao = 'Outros')
	begin
		insert into dbo.Categoria(CategoriaID, descricao, flagAtivo)
		values(next value for CategoriaID, 'Outros', 1)
	end

end