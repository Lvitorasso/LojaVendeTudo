if not exists (select 1 from sys.sequences where name = 'EstoqueProdutoID')
begin
	CREATE SEQUENCE dbo.EstoqueProdutoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;  
end

if not exists (select 1 from sys.sequences where name = 'ItensPedidoID')
begin
	CREATE SEQUENCE dbo.ItensPedidoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'MotivoDescontoID')
begin
	CREATE SEQUENCE dbo.MotivoDescontoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'PedidoID')
begin
	CREATE SEQUENCE dbo.PedidoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'PessoaID')
begin
	CREATE SEQUENCE dbo.PessoaID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;    
end

if not exists (select 1 from sys.sequences where name = 'ProdutoID')
begin
	CREATE SEQUENCE dbo.ProdutoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end

if not exists (select 1 from sys.sequences where name = 'SexoID')
begin
	CREATE SEQUENCE dbo.SexoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end

if not exists (select 1 from sys.sequences where name = 'StatusPedidoID')
begin
	CREATE SEQUENCE dbo.StatusPedidoID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;     
end


