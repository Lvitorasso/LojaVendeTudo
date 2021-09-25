using System;

namespace LojaVendeTudo.API.Models
{
    public class StatusPedido
    {
        public long StatusPedidoID { get; set; }
        public string Descricao  { get; set; }
	    public int FlagPermiteCancelamento { get; set; }
    }
}
