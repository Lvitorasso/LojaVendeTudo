using LojaVendeTudo.API.Models;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class ItensPedido
    {
        [IdSequence]
        public long ItensPedidoID  { get; set; }  
        public double valorUnitario { get; set; }  
        public int quantidade { get; set; }  
        public Pedido fk_Produto { get; set; }  
        public Produto fk_Pedido { get; set; }  
    }
}
