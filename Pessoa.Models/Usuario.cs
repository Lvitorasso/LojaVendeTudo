using System;

namespace Pessoas.Models
{
    public class Usuario
    {
        public long UsuarioID { get; set; }
        public string Login  { get; set; }
        public DateTime DataNascimento { get; set; }
	    public DateTime DataCriacaoUsuario { get; set; }
	    public DateTime DataUltimoLogin { get; set; }
	    public int FlagBloqueio { get; set; }
	    public Pessoa fk_Pessoa { get; set; }
    }
}
