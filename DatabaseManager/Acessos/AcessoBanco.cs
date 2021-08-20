using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;
using System.Collections;
using System.Data;

namespace DataBase.Acessos
{
    public class AcessoBanco : IAcessoBanco
    {
        ConstanteConexao cons = new ConstanteConexao();
        private const int SELECT = 1;
        private const int INSERT = 2;
        private const int DELETE = 3;
        private const int UPDATE = 4;
        private const int SELECT_TODOS = 5;

        private SqlConnection Conectar()
        {
            SqlConnection connection = new SqlConnection();
            
           connection.ConnectionString = cons.connectionString;

           connection.Open();

           return connection;
            
        }

        public ArrayList SelecionarTodos()
        {
            try
            {
                string comando = GeraComando(this, SELECT_TODOS);

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = this.Conectar();
                cmd.CommandText = comando;
               
                ArrayList arr = new ArrayList();

                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    var obj = Activator.CreateInstance(this.GetType());

                    foreach (var i in this.GetType().GetProperties())
                    {
                        obj.GetType().GetProperty($"{i.Name}").SetValue(obj, dr[$"{i.Name}"]);
                    }

                    arr.Add(obj);
                }

                if (cmd.Connection != null && cmd.Connection.State == ConnectionState.Open)
                    cmd.Connection.Close();

                return arr;
            }
            catch (Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }            
        }


        // Create a value of the required type
        static object InstanciaPeloTipo(Type t)
        {
            return Activator.CreateInstance(t);
        }

        public void Incluir()
        {
            try
            {
                string comando = GeraComando(this,INSERT);
   
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = this.Conectar();
                cmd.CommandText = comando;

                // salva no BD
                cmd.ExecuteNonQuery();

                if (cmd.Connection != null && cmd.Connection.State == ConnectionState.Open)
                    cmd.Connection.Close();

            }
            catch (Exception e)
            {
                // MELHORAR EXCEPTIONS
                throw e;
            }
        }

        public object Selecionar()
        {
            try
            {
                string comando = GeraComando(this,SELECT);

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = this.Conectar();
                cmd.CommandText = comando;

                var obj = Activator.CreateInstance(this.GetType());   

                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    foreach(var i in this.GetType().GetProperties()) 
                    {
                        obj.GetType().GetProperty($"{i.Name}").SetValue(obj,dr[$"{i.Name}"]);
                    }
                }

                if (cmd.Connection != null && cmd.Connection.State == ConnectionState.Open)
                    cmd.Connection.Close();

                return obj;
            }
            catch(Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }

        public object Selecionar(int? id)
        {
            try
            {
                string comando = GeraComando(this, SELECT, id);

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = this.Conectar();
                cmd.CommandText = comando;

                var obj = Activator.CreateInstance(this.GetType());

                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    foreach (var i in this.GetType().GetProperties())
                    {
                        obj.GetType().GetProperty($"{i.Name}").SetValue(obj, dr[$"{i.Name}"]);
                    }
                }

                if (cmd.Connection != null && cmd.Connection.State == ConnectionState.Open)
                    cmd.Connection.Close();

                return obj;
            }
            catch (Exception e)
            {
                // MELHORAR EXCEÇÕES 
                throw e;
            }
        }

        public void Apagar(int? id) 
        {
            string comando = GeraComando(this, DELETE, id);

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = this.Conectar();
            cmd.CommandText = comando;

            // Apaga no BD
            cmd.ExecuteNonQuery();

            if (cmd.Connection != null && cmd.Connection.State == ConnectionState.Open)
                cmd.Connection.Close();
        }

        public void Atualizar(int? id)
        {
            string comando = GeraComando(this, UPDATE, id);

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = this.Conectar();
            cmd.CommandText = comando;

            // Apaga no BD
            cmd.ExecuteNonQuery();

            if (cmd.Connection != null && cmd.Connection.State == ConnectionState.Open)
                cmd.Connection.Close();
        }


        private string GeraComando(object obj, int acao, int? id = 0)
        {
            string comando = "";

            switch(acao)
            {
                case SELECT:
                    comando = GeraSelect(this, id);
                    break;
                case INSERT:
                    comando = GeraInsert(this);
                    break;
                case DELETE:
                    comando = GeraDelete(this, id);
                    break;
                case UPDATE:
                    comando = GeraUpdate(this, id);
                    break;
                case SELECT_TODOS:
                    comando = GeraSelectTodos(this);
                    break;
            }

            return comando;
        }

        private string GeraUpdate(object obj, int? id)
        {
            var props = obj.GetType().GetProperties();
            string update = $"update {this.GetType().Name} \n set";

            string _values = "";

            foreach (var item in props)
            {
                //ignora ID no insert, o mesmo ainda nem deve ter ID;
                if (item.Name.ToUpper().Contains("ID"))
                    continue;
                else if (_values == "") // primeiro valor entra sem virgula
                {

                    if (item.PropertyType.Name.Equals("String")) // tenho que verificar o tipo para colocar as aspas
                        _values += $" {item.Name} = \'{item.GetValue(obj)}\'";
                    else if (item.PropertyType.Name.Equals("Int32")) // int não precisa de tratamento
                        _values += $" {item.Name} = {item.GetValue(obj)}";
                    else if (item.PropertyType.Name.Equals("DateTime")) // date time 
                        _values += $" {item.Name} = \'{Convert.ToDateTime(item.GetValue(obj)).ToString("yyyy/MM/dd")}\'";
                }
                else // outros valores já vão com a virgula
                {
                    if (item.PropertyType.Name.Equals("String"))
                        _values += $" ,{item.Name} = \'{item.GetValue(obj)}\'";
                    else if (item.PropertyType.Name.Equals("Int32"))
                        _values += $" ,{item.Name} = {item.GetValue(obj)}";
                    else if (item.PropertyType.Name.Equals("DateTime"))
                        _values += $" ,{item.Name} =\'{Convert.ToDateTime(item.GetValue(obj)).ToString("yyyy/MM/dd").Replace("/", "")}\'";
                }
            }

            update += _values;
            update += GeraWhere(this,id);

            return update;
        }


        private string GeraSelect(object obj, int? id = 0)
        {
            string select = $"select * from {this.GetType().Name}";
            string Where = GeraWhere(this, id);
            select += Where;

            return select;
        }

        private string GeraSelectTodos(object obj)
        {
            string select = $"select * from {this.GetType().Name}";
            return select;
        }

        private string GeraDelete(object obj, int? id)
        {
            string select = $"delete from {this.GetType().Name}";
            string Where = GeraWhere(this, id);
            select += Where;
            return select;
        }

        private string GeraWhere(object obj, int? id = 0)
        {
            //Declaro as variaveis
            var props = obj.GetType().GetProperties();
            string whr = " where";

            //procuro o ID e seto como where
            foreach (var item in props)
            {
                if (item.Name.ToUpper().Contains("ID"))
                    if(id == 0)
                        whr += $" {item.Name} = {item.GetValue(obj)}";
                    else
                        whr += $" {item.Name} = {id}";
            }

            return whr;
        }

        private string GeraValues(object obj)
        {
            //Declaro as variaveis
            var props = obj.GetType().GetProperties();
            string _insert = "values (";
            string _values = "";

            foreach (var item in props)
            {
                //ignora ID no insert, o mesmo ainda nem deve ter ID;
                if (item.Name.ToUpper().Contains("ID"))
                    continue;
                else if (_values == "") // primeiro valor entra sem virgula
                {

                    if (item.PropertyType.Name.Equals("String")) // tenho que verificar o tipo para colocar as aspas
                        _values += $" \'{item.GetValue(obj)}\'";
                    else if (item.PropertyType.Name.Equals("Int32")) // int não precisa de tratamento
                        _values += $" {item.GetValue(obj)}";
                    else if (item.PropertyType.Name.Equals("DateTime")) // date time 
                        _values += $" \'{Convert.ToDateTime(item.GetValue(obj)).ToString("yyyy/MM/dd")}\'";
                }
                else // outros valores já vão com a virgula
                {
                    if (item.PropertyType.Name.Equals("String")) 
                        _values += $" ,\'{item.GetValue(obj)}\'";
                    else if (item.PropertyType.Name.Equals("Int32"))
                        _values += $" ,{item.GetValue(obj)}";
                    else if (item.PropertyType.Name.Equals("DateTime"))
                        _values += $" ,\'{Convert.ToDateTime(item.GetValue(obj)).ToString("yyyy/MM/dd").Replace("/","")}\'";
                }
            }

            _insert += _values;
            _insert += ")";

            return _insert;
        }

        private string GeraInsert(object obj)
        {
            //Declaro as variaveis
            var props = obj.GetType().GetProperties();
            string _insert = $"Insert into {this.GetType().Name} (";
            string _props = "";

            foreach (var item in props)
            {
                //ignora ID no insert, o mesmo ainda nem deve ter ID;
                if (item.Name.ToUpper().Contains("ID"))
                    continue;
                else if (_props == "")  // primeiro valor entra sem virgula
                    _props += $" {item.Name}";
                else // outros valores já vão com a virgula
                    _props += $" ,{item.Name}";

            }

            // coloca as props no insert
            _insert += _props;

            // fecha o parenteses do cabeçalho
            _insert += ")";


            // Coloca os values para o insert
            _insert += GeraValues(this);

            return _insert;
        }
    }
}
