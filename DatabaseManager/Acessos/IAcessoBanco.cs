using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManager.Acessos
{
    interface IAcessoBanco
    {
        object Selecionar();
        object Selecionar(int? id);
        ArrayList SelecionarTodos();
        void Incluir();
        void Apagar(int? id);
        void Atualizar(int? id);

    }
}
