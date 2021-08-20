using System;

namespace DataBase
{
    public class ConstanteConexao
    {
        private static string Instancia = @"DESKTOP-HP9ALO1\LOCALDB";
        private static string dataBase = "LojaVendeTudo";
        private static string usuario = "LojaVendeTudo";
        private static string senha = "AppPass";

        public string connectionString 
        { get; set; } = $"Data Source = {Instancia};  Initial Catalog = {dataBase}; User ID = {usuario}; Password={senha}";

    }
}
