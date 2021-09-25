using LojaVendeTudo.API.Models;
using System;

namespace LojaVendeTudo.API.Models
{
    public class Pedido
    {
        public long PedidoID  { get; set; }  
        public DateTime dataPedido { get; set; }  
        public double valorTotal { get; set; }  
        public int flagDesconto { get; set; }  
        public double ValorDesconto { get; set; }  
        public StatusPedido fk_StatusPedido { get; set; }  
        public Pessoa fk_Pessoa { get; set; }  
        public MotivoDesconto fk_MotivoDesconto { get; set; }  
    }
}
