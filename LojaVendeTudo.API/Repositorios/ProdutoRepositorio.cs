using LojaVendeTudo.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LojaVendeTudo.API.Repositorios
{

    public class ProdutoRepositorio : ControllerBase
    {

        public bool cadastrarProdutoNovo(Produto produto)
        {
            try
            {
                Produto validProd = new Produto();

                Produto produtoBanco = (Produto)validProd.Selecionar($"nome = '{produto.Nome}' and marca = '{produto.Marca}'");

                if (produtoBanco.ProdutoID > 0)
                    throw new ApplicationException("Um produto com esse nome e marca já existe");

                produto.Incluir();

                return true;
            }
            catch(Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }

        public bool DeletarProduto(int id)
        {
            try
            {
                Produto prod = new Produto();

                prod.Apagar(id);

                return true;
            }
            catch (Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }

        public Produto ObterPorID(int id)
        {
            try
            {
                Produto prod = new Produto();

                prod.Selecionar(id);

                return prod;
            }
            catch(Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }

        public Produto ObterPorNome(string nome)
        {
            try
            {
                Produto prod = new Produto();

                prod.Selecionar(nome);

                return prod;
            }
            catch (Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }

        public void AtualizarProduto(Produto produto)
        {
            try
            {
                Produto validProd = new Produto();

                Produto produtoBanco = (Produto)validProd.Selecionar(produto.ProdutoID);

                if (produtoBanco.ProdutoID <= 0)
                    throw new ApplicationException("O produto não foi encontrado");

                produto.Atualizar(produto.ProdutoID);
            }
            catch (Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }


    }
}
