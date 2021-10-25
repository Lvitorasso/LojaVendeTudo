using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LojaVendeTudo.API.Models
{
    public class Posts
    {
        public int userID { get; set; }
        public int id { get; set; }
        public string title { get; set; }
        public string body { get; set; }

    }
}
