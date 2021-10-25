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
        [Route("api/GetAllPessoas")]
        public IActionResult GetAllPessoas()
        {
            try
            {
                Pessoa pessoa = new Pessoa();
                ArrayList arr = pessoa.SelecionarTodos();

                var stringContent = JsonConvert.SerializeObject(arr, Formatting.Indented);

                return Ok(stringContent);

            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
