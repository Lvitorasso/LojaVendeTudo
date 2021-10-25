using LojaVendeTudo.API.Models;
using LojaVendeTudo.API.Repositorios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace LojaVendeTudo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {

        private ProdutoRepositorio repo = new ProdutoRepositorio();

        [Route("api/CadastrarProduto")]
        [HttpPost]
        public IActionResult CadastrarProduto(Produto produtoNovo)
        {
            try
            {
                if (produtoNovo.ProdutoID > 0)
                    throw new Exception("O id do produto deve ser enviado sempre como 0");

                repo.cadastrarProdutoNovo(produtoNovo);

                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("api/DeletaProdutoPorID")]
        [HttpDelete]
        public IActionResult DeletaProdutoPorID(int id)
        {
            try
            {
                repo.DeletarProduto(id);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("api/GetAllProdutos")]
        public IActionResult GetAllProdutos()
        {
            try
            {
                Produto produto = new Produto();
                ArrayList arr = produto.SelecionarTodos();

                var stringContent = JsonConvert.SerializeObject(arr, Formatting.Indented);

                return Ok(stringContent);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
