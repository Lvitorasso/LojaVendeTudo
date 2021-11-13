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

        [HttpGet("{id}")]
        public IActionResult ObterProdutoPorID(int id)
        {
            Produto produto = new Produto();

            if (id <= 0)
                return BadRequest(new { message = "O id é obrigatorio, por favor ajustar a requisição." });


            produto = repo.ObterPorID(id);

            if(produto.ProdutoID <= 0)
                return Ok(new { message = "Produto não encontrado" });


            var produtoJson = JsonConvert.SerializeObject(produto, Formatting.Indented);

            return Ok(produtoJson);
        }

        [HttpGet("{nome}")]
        public IActionResult ObterProdutoPorNome(string nome)
        {
            Produto produto = new Produto();

            if (nome == null || nome == "" || nome == String.Empty)
                return BadRequest(new { message = "O nome é obrigatorio, por favor ajustar a requisição." });


            produto = repo.ObterPorNome(nome);

            if (produto.ProdutoID <= 0)
                return Ok(new { message = "Produto não encontrado" });


            var produtoJson = JsonConvert.SerializeObject(produto, Formatting.Indented);

            return Ok(produtoJson);
        }

        [HttpGet]
        [Route("api/GetTodosProdutos")]
        public IActionResult GetTodosProdutos()
        {
            try
            {
                Produto produto = new Produto();
                ArrayList arrProdutos = produto.SelecionarTodos();

                var arrProdutoJson = JsonConvert.SerializeObject(arrProdutos, Formatting.Indented);

                return Ok(arrProdutoJson);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("api/CadastrarProduto")]
        [HttpPost]
        public IActionResult CadastrarProduto(Produto produtoNovo)
        {
            try
            {
                if (produtoNovo.ProdutoID > 0)
                    throw new Exception("O id do produto deve ser enviado sempre como 0");

                if (produtoNovo.Nome == null || produtoNovo.Nome == "" || produtoNovo.Nome == String.Empty)
                    throw new Exception("Enviar Nome");

                if (produtoNovo.Marca == null || produtoNovo.Marca == "" || produtoNovo.Marca == String.Empty)
                    throw new Exception("Enviar Marca");

                if (produtoNovo.Descricao == null || produtoNovo.Descricao == "" || produtoNovo.Descricao == String.Empty)
                    throw new Exception("Enviar Descricao");

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

        [HttpPost]
        public IActionResult salvarProdutoPorID(Produto produto)
        {
            try
            {
                if (produto == null)
                    return Ok("O parametro pessoa é obrigatorio");

                if (produto.ProdutoID <= 0)
                    return Ok("O parametro pessoa é obrigatorio");

                repo.AtualizarProduto(produto);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
