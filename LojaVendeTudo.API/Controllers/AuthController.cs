using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using LojaVendeTudo.API.Models;
using System;
using System.Collections;
using LojaVendeTudo.API.Service;

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
        [Route("/api/authenticate/logar")]
        [HttpPost]
        public IActionResult logar([FromBody] Usuario usuario)
        {
            try
            {
                if (usuario.Senha != null && usuario.Senha != "")
                    usuario.Senha = AuthService.GerarHashMd5(usuario.Senha);

                Usuario _usuarioBanco = new Usuario();

                _usuarioBanco = (Usuario)_usuarioBanco.Selecionar($" Login =  '{usuario.Login}'");

                ArrayList retorno = new ArrayList();

                if (usuario.Login == _usuarioBanco.Login && usuario.Senha == _usuarioBanco.Senha)
                {
                    var token = AuthService.GenerateToken(usuario);

                    retorno.Add(true);
                    retorno.Add(token);

                    return Ok(retorno);
                }
                else
                {
                    retorno.Add(false);
                    retorno.Add("Usuario ou senha invalidos");

                    return Ok(retorno);
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Route("/api/authenticate/cadastrar")]
        [HttpPost]
        public IActionResult cadastrar([FromBody] Pessoa pessoa)
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
                novoUsuario.Senha = AuthService.GerarHashMd5(pessoa.Senha);
                novoUsuario.fk_Pessoa = nova.PessoaID;

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
