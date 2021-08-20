using System;

namespace Pedidos.Models
{
    public class MotivoDesconto
    {
        public long MotivoDescontoID { get; set; }
        public string Descricao { get; set; }
        public double PercDesconto { get; set; }
        public double ValorMaxDesconto { get; set; }
        public int FlagAtivo  { get; set; }
    }
}
