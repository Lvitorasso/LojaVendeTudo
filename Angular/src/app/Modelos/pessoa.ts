export interface Pessoa {
     PessoaID: number; 
     Nome: string; 
     Sobrenome: string;   
     Documento: string;  
     Email: string;   
     DataCriacao: Date;   
     DataNascimento: Date; 
     Telefone: string; 
     Celular: string; 
     FlagFornecedor: number;  
     FlagCliente: number;  
     fk_Sexo: number;  
     DataUltimoLogin: Date; 
     Login: string; 
     Senha: string; 
     FlagBloqueio: number;  
     role: string; 
}