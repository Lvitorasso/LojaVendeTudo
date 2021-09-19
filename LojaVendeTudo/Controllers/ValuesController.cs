using Microsoft.AspNetCore.Mvc;
using LojaVendeTudo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Text.Json;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LojaVendeTudo.Controllers
{
    [Route("api/values")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        [Route("")]
        [HttpGet]
        public string Get()
        {
            Filme[] ob = new Filme[] { new Filme { nome = "value1", title = "value1" },
                                       new Filme { nome = "value1", title = "value1" },
                                       new Filme { nome = "value1", title = "value1" },
                                       new Filme { nome = "value1", title = "value1" } };

            var json = JsonSerializer.Serialize(ob);

            return json;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        /// <summary>
        /// Busca um cliente pelo seu ID 
        /// </summary>
        /// <param name="id">ID unico do cliente a ser pesquisada</param>
        /// <returns>Um objeto do tipo cliente</returns>
        [HttpGet]
        [Route("api/Values/PesquisaCliente/{id}")]
        public IEnumerable<string> PesquisaCliente(int id)
        {
            try
            {

                return new string[] { "value1", "value2", "value3", "value4", "value5" };
            }
            catch (HttpRequestException ex)
            {
                return (IEnumerable<string>)ex.ToString().ToList();
            }
        }


    }
}
