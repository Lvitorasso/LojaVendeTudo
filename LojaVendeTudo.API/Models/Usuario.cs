using DatabaseManager.Acessos;
using DatabaseManager.Validadadores;
using System;

namespace LojaVendeTudo.API.Models
{
    public class Usuario : AcessoBanco
    {
        [IdSequence]
        public long UsuarioID { get; set; }
        public string Login  { get; set; }
        public string Senha { get; set; }
	    public DateTime DataCriacaoUsuario { get; set; }
	    public DateTime DataUltimoLogin { get; set; }
	    public int FlagBloqueio { get; set; }
	    public long fk_Pessoa { get; set; }
    }
}
