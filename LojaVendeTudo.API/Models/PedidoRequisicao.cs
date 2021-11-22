using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LojaVendeTudo.API.Models
{
    public class PedidoRequisicao
    {
        public Produto[] Produtos { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
    }
}
