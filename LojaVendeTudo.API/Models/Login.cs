using DatabaseManager.Acessos;
using DatabaseManager.Validadadores;

namespace LojaVendeTudo.API.Models
{
    public class Login : AcessoBanco
    {

       public string usuario { get; set; }
       public string senha { get; set; }
    }
}
