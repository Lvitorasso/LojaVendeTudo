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
    }
}
