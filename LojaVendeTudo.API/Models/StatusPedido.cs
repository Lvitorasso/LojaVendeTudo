using System;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class StatusPedido
    {
        [IdSequence]
        public long StatusPedidoID { get; set; }
        public string Descricao  { get; set; }
	    public int FlagPermiteCancelamento { get; set; }
    }
}
