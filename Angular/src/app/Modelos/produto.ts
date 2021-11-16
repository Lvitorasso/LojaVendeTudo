export class Produto{
      ProdutoID: number = 0;
      Descricao: string = '';  
      Nome: string = ''; 
      Marca: string = ''; 
      Fabricante: string = ''; 
      Peso: string = ''; 
      PrecoUnitario: number = 0; 
      ImgSrc: string = '';
      fk_Fornecedor: number = 0; 
      fk_Categoria: number = 0; 
      qtd: number = 0;
}