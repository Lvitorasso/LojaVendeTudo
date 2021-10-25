using LojaVendeTudo.API.Models;
using DatabaseManager.Validadadores;
using DatabaseManager.Acessos;

namespace LojaVendeTudo.API.Models
{
    public class Produto : AcessoBanco
    {
        [IdSequence]
        public long ProdutoID { get; set; }
        public string Descricao  { get; set; }
        public string Nome { get; set; }
	    public string Marca { get; set; }
	    public string Fabricante { get; set; }
	    public string Peso { get; set; }
	    public decimal PrecoUnitario { get; set; }
	    public long fk_Fornecedor { get; set; }
    }
}
