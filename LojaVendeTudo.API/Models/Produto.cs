using LojaVendeTudo.API.Models;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class Produto
    {
        [IdSequence]
        public long ProdutoID { get; set; }
        public string Descricao  { get; set; }
        public string Nome { get; set; }
	    public string Marca { get; set; }
	    public string Fabricante { get; set; }
	    public string Peso { get; set; }
	    public double PrecoUnitario { get; set; }
	    public Pessoa fk_Fornecedor { get; set; }
    }
}
