using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using LojaVendeTudo.API.Models;
using System;
using Uteis;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LojaVendeTudo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // GET: api/<ValuesController1>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ValuesController1>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController1>
        [Route("/api/authenticate/login")]
        [HttpPost]
        public IActionResult authenticate([FromBody] Login login)
        {
            if (login.usuario == "mosh@domain.com" && login.senha == "1234")
            {
                var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA";

                return Ok(token);
            }
            else
            {
                return Unauthorized();
            }
        }

        [Route("/api/authenticate/singUp")]
        [HttpPost]
        public IActionResult singUp([FromBody] Pessoa pessoa)
        {
            try
            {
                pessoa.Incluir();

                Pessoa nova = new Pessoa();

                nova = (Pessoa)nova.Selecionar($" documento =  '{pessoa.Documento}'");

                Usuario novoUsuario = new Usuario();
                novoUsuario.Login = pessoa.Email;
                novoUsuario.DataCriacaoUsuario = DateTime.Now;
                novoUsuario.DataUltimoLogin = DateTime.Now;
                novoUsuario.FlagBloqueio = 0;
                novoUsuario.Senha = Util.GerarHashMd5(pessoa.Senha);
                novoUsuario.fk_Pessoa = pessoa.PessoaID;

                novoUsuario.Incluir();


                return Ok(true);
            }
            catch(Exception e)
            {
                return BadRequest();
            }
        }


    }
}
