if not exists (select 1 from sys.sequences where name = 'CategoriaID')
begin
	CREATE SEQUENCE dbo.CategoriaID  
		START WITH 1  
		INCREMENT BY 1
		maxvalue 999999;  
end



