using DatabaseManager.Acessos;
using DatabaseManager.Validadadores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LojaVendeTudo.API.Models
{
    public class Categoria : AcessoBanco
    {
        [IdSequence]
        public int CategoriaID { get; set; }
        public string Descricao { get; set; }
        public int flagAtivo { get; set; }
    }
}
