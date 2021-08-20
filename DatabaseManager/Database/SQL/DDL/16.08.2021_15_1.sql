if not exists (select 1 from sys.sequences where name = 'EstoqueProdutoID')
begin
	CREATE SEQUENCE EstoqueProdutoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;  
end

if not exists (select 1 from sys.sequences where name = 'ItensPedidoID')
begin
	CREATE SEQUENCE ItensPedidoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'MotivoDescontoID')
begin
	CREATE SEQUENCE MotivoDescontoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'PedidoID')
begin
	CREATE SEQUENCE PedidoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'PessoaID')
begin
	CREATE SEQUENCE PessoaID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'ProdutoID')
begin
	CREATE SEQUENCE ProdutoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end

if not exists (select 1 from sys.sequences where name = 'SexoID')
begin
	CREATE SEQUENCE SexoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end

if not exists (select 1 from sys.sequences where name = 'StatusPedidoID')
begin
	CREATE SEQUENCE StatusPedidoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end

if not exists (select 1 from sys.sequences where name = 'UsuarioID')
begin
	CREATE SEQUENCE UsuarioID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end
