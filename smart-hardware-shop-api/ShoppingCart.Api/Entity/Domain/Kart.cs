using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Entity.Domain
{
    public class Kart
    {
        public int id { get; set; }
        public string title { get; set; }
        public double price { get; set; }
        public string description { get; set; }
        public string category { get; set; }
        public string image { get; set; }
        public int amount { get; set; }
    }

}
