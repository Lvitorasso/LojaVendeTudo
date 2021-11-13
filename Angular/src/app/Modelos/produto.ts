export interface Produto{
      ProdutoID: number;
      Descricao: string;  
      Nome: string; 
      Marca: string; 
      Fabricante: string; 
      Peso: string; 
      PrecoUnitario: number; 
      fk_Fornecedor: number; 
}