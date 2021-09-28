using System;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class Sexo
    {
        [IdSequence]
        public long SexoID { get; set; }
        public string Descricao  { get; set; }
    }
}
