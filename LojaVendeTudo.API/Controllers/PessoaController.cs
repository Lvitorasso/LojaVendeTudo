using LojaVendeTudo.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace LojaVendeTudo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        [HttpGet]
        [Route("/api/pessoas/GetTodosUsuarios")]
        public IActionResult GetTodosUsuarios()
        {
            try
            {
                Pessoa pessoa = new Pessoa();
                ArrayList arr = pessoa.SelecionarTodos();

                if (arr.Count <= 0)
                    return Ok("Nenhuma pessoa encontrada");

                var arrPessoaJson = JsonConvert.SerializeObject(arr, Formatting.Indented);

                return Ok(arrPessoaJson);

            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("/api/pessoas/getTodosFornecedores")]
        public IActionResult getTodosFornecedores()
        {
            try
            {
                Pessoa pessoa = new Pessoa();
                ArrayList arr = pessoa.SelecionarTodos("flagFornecedor = 1");

                if (arr.Count <= 0)
                    return Ok("Nenhuma pessoa encontrada");

                var arrPessoaJson = JsonConvert.SerializeObject(arr, Formatting.Indented);

                return Ok(arrPessoaJson);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("/api/pessoas/ObterPessoaPorID")]
        public IActionResult ObterPessoaPorID(int id)
        {
            try
            {
                if (id <= 0)
                    return Ok("O parametro id é obrigatorio e deve ser maior que 0");

                Pessoa pessoa = new Pessoa();
                pessoa = (Pessoa)pessoa.Selecionar(id);

                if (pessoa.PessoaID <= 0)
                    return Ok("Nenhuma pessoa encontrada com esse ID");

                var pessoaJSON = JsonConvert.SerializeObject(pessoa, Formatting.Indented);

                return Ok(pessoaJSON);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("/api/pessoas/ObterPessoaPorNome/nome")]
        public IActionResult ObterPessoaPorNome(string nome)
        {
            try
            {
                if(nome == "" || nome == String.Empty || nome == null)
                    return Ok("O parametro nome é obrigatorio");

                Pessoa pessoa = new Pessoa();
                pessoa = (Pessoa)pessoa.Selecionar($"nome = '{nome}'");


                if (pessoa.PessoaID <= 0)
                    return Ok("Nenhuma pessoa encontrada com esse nome");

                var pessoaJSON = JsonConvert.SerializeObject(pessoa, Formatting.Indented);


                return Ok(pessoaJSON);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("/api/pessoas/salvarPessoaPorID/pessoa")]
        public IActionResult salvarPessoaPorID(Pessoa pessoa)
        {
            try
            {
                if (pessoa == null)
                    return Ok("O parametro pessoa é obrigatorio");

                if (pessoa.PessoaID <= 0)
                    return Ok("O parametro pessoa é obrigatorio");

                pessoa.Atualizar(pessoa.PessoaID);


                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
