using System;

namespace Pedidos.Models
{
    public class StatusPedido
    {
        public long StatusPedidoID { get; set; }
        public string Descricao  { get; set; }
	    public int FlagPermiteCancelamento { get; set; }
    }
}
