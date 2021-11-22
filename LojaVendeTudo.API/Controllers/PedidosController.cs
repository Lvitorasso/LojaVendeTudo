using LojaVendeTudo.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;

namespace LojaVendeTudo.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private string endPoint;
        private HttpRequestMessage request;
        HttpContext httpContext;
        private HttpClient client;

        // GET: api/<PedidosController>
        [Route("/api/GetTodosPedidos")]
        [HttpGet]
        public IActionResult GetTodosPedidos()
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
                throw new Exception("The authorization header is either empty or isn't Basic.");
            }

            return Unauthorized();
        }

        // POST api/<PedidosController>
        [Route("/api/RealizarPedido/Pedido")]
        [HttpPost]
        public IActionResult RealizarPedido(PedidoRequisicao pedido)
        {

            return Ok();
        }

    }
}
