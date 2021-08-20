using System;

namespace Pessoas.Models
{
    public class Pessoa
    {
       	public long PessoaID { get; set; }
	    public string Nome { get; set; }
	    public string Sobrenome { get; set; }  
	    public string Documento { get; set; } 
	    public string Email { get; set; }  
	    public DateTime DataCriacao { get; set; }  
	    public DateTime DataNascimento { get; set; } 
	    public string Telefone { get; set; }
	    public string Celular { get; set; }
	    public int FlagFornecedor { get; set; }
	    public int FlagCliente { get; set; }
	    public Sexo fk_Sexo { get; set; } 
    }
}
