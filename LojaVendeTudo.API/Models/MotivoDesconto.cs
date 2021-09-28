using System;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class MotivoDesconto
    {
        [IdSequence]
        public long MotivoDescontoID { get; set; }
        public string Descricao { get; set; }
        public double PercDesconto { get; set; }
        public double ValorMaxDesconto { get; set; }
        public int FlagAtivo  { get; set; }
    }
}
