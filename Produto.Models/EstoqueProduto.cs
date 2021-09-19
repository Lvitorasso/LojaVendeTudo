using System;

namespace Produtos.Models
{
    public class EstoqueProduto
    {
        public long EstoqueProdutoID { get; set; }
        public int qtdDisponivel { get; set; }
        public DateTime DataUltimoRecebimento { get; set; }
        public DateTime DataProximoRecebimento { get; set; }
        public Produto fk_Produto  { get; set; }
    }
}