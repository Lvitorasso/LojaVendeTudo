using DatabaseManager.Acessos;
using DatabaseManager.Validadadores;
using System;

namespace LojaVendeTudo.API.Models
{
    public class Pessoa : AcessoBanco
    {
		[IdSequence]
       	public int PessoaID { get; set; }
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
	    public long fk_Sexo { get; set; }
		public DateTime DataUltimoLogin { get; set; }
		public string Login { get; set; }
		public string Senha { get; set; }
		public int FlagBloqueio { get; set; }
		public string role { get; set; }
    }
}
