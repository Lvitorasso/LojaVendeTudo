using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LojaVendeTudo.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {

        HttpContext httpContext;

        // GET: api/<PedidosController>
        [Route("/api/orders")]
        [HttpGet]
        public IActionResult Get()
        {
            HttpClient client = new HttpClient();

            httpContext = HttpContext.Request.HttpContext;
            string authHeader = this.httpContext.Request.Headers["Authorization"];


            if (authHeader != null && authHeader.StartsWith("Basic"))
            {

                List<string> pedidos = new List<string>();
                pedidos.Add("1");
                pedidos.Add("2");
                pedidos.Add("3");
                pedidos.Add("4");

                return Ok(pedidos);
            }
            else
            {
                //Handle what happens if that isn't the case
                throw new Exception("The authorization header is either empty or isn't Basic.");

            }

            return Unauthorized();
        }

        // GET api/<PedidosController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PedidosController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PedidosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PedidosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
