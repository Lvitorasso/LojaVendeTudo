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
        public IActionResult logar([FromBody] Pessoa usuario)
        {
            try
            {
                if (usuario.Senha != null && usuario.Senha != "" && usuario.Senha != string.Empty)
                    usuario.Senha = AuthService.GerarHashMd5(usuario.Senha);
                else
                    return Ok(new { mensagemRetorno = "Por favor informar a senha" });

                if (usuario.Login == null && usuario.Login == "" && usuario.Login == string.Empty)
                    return Ok(new { mensagemRetorno = "Por favor informar a senha" });

                Pessoa pessoaBanco = new Pessoa();

                //pego o usuario da base para autenticar
                pessoaBanco = (Pessoa)pessoaBanco.Selecionar($" Login =  '{usuario.Login}'");

                if (usuario.Login == pessoaBanco.Login && usuario.Senha == pessoaBanco.Senha)
                {
                    //usuario OK, vou alterar o login para o nome e setar sua role para o front
                    usuario.role = pessoaBanco.role;
                    usuario.Nome = pessoaBanco.Nome;

                    var token = AuthService.GenerateToken(usuario);

                    return Ok(new { token = token, usuario = usuario.Nome });
                }
                else
                    return Ok(new { mensagemRetorno = "Usuario ou senha invalidos" });
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
                //criptografa a senha
                pessoa.Senha = AuthService.GerarHashMd5(pessoa.Senha);
                pessoa.Login = pessoa.Email;
                pessoa.role = "usuario";
                pessoa.Incluir();

                return Ok(new { mensagemRetornoOK = "Cadastrado com sucesso!" });
            }
            catch(Exception e)
            {
                return BadRequest(new { mensagemRetorno = e.ToString() });
            }
        }


    }
}
