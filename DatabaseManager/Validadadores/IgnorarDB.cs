using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseManager.Validadadores
{
    public class IgnorarDB : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            //return true if 'value' is a valid email. Otherwise return false.
            return true;
        }

    }
}
