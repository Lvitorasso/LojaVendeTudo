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

        [HttpGet]
        [Route("/api/Produto/ObterProdutoPorID/id")]
        public IActionResult ObterProdutoPorID(int id)
        {
            Produto produto = new Produto();

            if (id <= 0)
                return BadRequest(new { message = "O id é obrigatorio, por favor ajustar a requisição." });


            produto = repo.ObterProdutoPorID(id);

            if(produto.ProdutoID <= 0)
                return Ok(new { message = "Produto não encontrado" });


            var produtoJson = JsonConvert.SerializeObject(produto, Formatting.Indented);

            return Ok(produtoJson);
        }

        [HttpGet]
        [Route("/api/Produto/ObterProdutoPorNome/nome")]
        public IActionResult ObterProdutoPorNome(string nome)
        {
            Produto produto = new Produto();

            if (nome == null || nome == "" || nome == String.Empty)
                return BadRequest(new { message = "O nome é obrigatorio, por favor ajustar a requisição." });


            produto = repo.ObterProdutoPorNome(nome);

            if (produto.ProdutoID <= 0)
                return Ok(new { message = "Produto não encontrado" });


            var produtoJson = JsonConvert.SerializeObject(produto, Formatting.Indented);

            return Ok(produtoJson);
        }

        [HttpGet]
        [Route("/api/Produto/GetTodosProdutos")]
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


        [HttpPost]
        [Route("/api/Produto/CadastrarProduto/produto")]
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

        [HttpDelete]
        [Route("/api/Produto/DeletaProdutoPorID/id")]
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
        [Route("/api/Produto/SalvarProdutoPorID/Produto")]
        public IActionResult salvarProdutoPorID(Produto produto)
        {
            try
            {
                if (produto == null)
                    return Ok("O parametro pessoa é obrigatorio");

                if (produto.ProdutoID <= 0)
                    repo.cadastrarProdutoNovo(produto);
                else
                    repo.AtualizarProduto(produto);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("/api/Produto/getTodasCategorias")]
        public IActionResult getTodasCategorias()
        {
            try
            {
                var arrCats = repo.ObterTodasCategorias();

                var CategoriasJson = JsonConvert.SerializeObject(arrCats, Formatting.Indented);

                return Ok(CategoriasJson);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("/api/Produto/ObterCategoriaPorID/id")]
        public IActionResult ObterCategoriaPorID(int id)
        {
            Categoria categoria = new Categoria();

            if (id <= 0)
                return BadRequest(new { message = "O id é obrigatorio, por favor ajustar a requisição." });


            categoria = repo.ObterCategoriaPorID(id);

            if (categoria.CategoriaID <= 0)
                return Ok(new { message = "Categoria não encontrada" });


            var categoriaJson = JsonConvert.SerializeObject(categoria, Formatting.Indented);

            return Ok(categoriaJson);
        }

        [HttpGet]
        [Route("/api/Produto/ObterCategoriaPorNome/nome")]
        public IActionResult ObterCategoriaPorNome(string nome)
        {
            Categoria categoria = new Categoria();

            if (nome == null || nome == "" || nome == String.Empty)
                return BadRequest(new { message = "O nome é obrigatorio, por favor ajustar a requisição." });


            categoria = repo.ObterCategoriaPorNome(nome);

            if (categoria.CategoriaID <= 0)
                return Ok(new { message = "Categoria não encontrada" });


            var categoriaJson = JsonConvert.SerializeObject(categoria, Formatting.Indented);

            return Ok(categoriaJson);
        }

    }
}
