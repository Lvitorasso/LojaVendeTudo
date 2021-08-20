using Produtos.Models;
using System;

namespace Pedidos.Pedido
{
    public class ItensPedido
    {
        public long ItensPedidoID  { get; set; }  
        public double valorUnitario { get; set; }  
        public int quantidade { get; set; }  
        public Pedido fk_Produto { get; set; }  
        public Produto fk_Pedido { get; set; }  
    }
}
