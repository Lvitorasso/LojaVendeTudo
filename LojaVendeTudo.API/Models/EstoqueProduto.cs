using System;
using LojaVendeTudo.API.Models;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class EstoqueProduto
    {
        [IdSequence]
        public long EstoqueProdutoID { get; set; }
        public int qtdDisponivel { get; set; }
        public DateTime DataUltimoRecebimento { get; set; }
        public DateTime DataProximoRecebimento { get; set; }
        public Produto fk_Produto  { get; set; }
    }
}
