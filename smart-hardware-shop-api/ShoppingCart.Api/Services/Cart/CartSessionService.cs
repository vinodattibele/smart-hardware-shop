using ShoppingCart.Entity.Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppingCart.Api.Services.Cart
{
    public class CartSessionService : ICartSessionService
    {
        List<Kart> myKart;
        public CartSessionService()
        {
            myKart = new List<Kart>() {
                new Kart()
                {
                id = 1,
                title = "SharkGrip® Pry Bar and Nail Puller ~ 10",
                price = 13.01,
                description = "Dual-purpose pry bar and nail puller with a hand-sharpened, double-tempered blade, 10-inches long",
                category = "Hand Tools",
                image = "shark.jpg",
                amount = 130
                },
                new Kart()
                {
                id = 2,
                title = "M18 Hm Drll Impact Kit",
                price = 222.95,
                description = "2-tool combo kit includes 2602-20 1/2 hammer drill driver & 2650-20 1/4 hex compact impact driver",
                category = "Power Tools",
                image = "dril.jpg",
                amount = 120
                },
                new Kart()
                {
                id = 3,
                title = "Saw Horse Bracket ~ Medium Duty",
                price = 199.95,
                description = "Uses dressed or common 2 x 4 lumber, Rust resistant finish, Medium duty bracket, Heavy gauge steel",
                category = "Stationary",
                image = "saw.jpg",
                amount = 500
                },
                new Kart()
                {
                id = 4,
                title = "Swivel Head Shear",
                price = 224.65,
                description = "H-D 18 GA. SWIVEL HEAD SHEAR, Powerful 5.0 Amp, all ball-bearing motor",
                category = "Power Tools",
                image = "Swivel.jpg",
                amount = 500
                },
                new Kart()
                {
                id = 5,
                title = "Cordless Air Compressor, 60v 2.5 Gal.",
                price = 319,
                description = "DeWALT FLEXVOLT 2.5 GAL. CORDLESS AIR COMPRESSOR. 60V MAX 2.5 gal. cordless air compressor kit",
                category = "Power Tools",
                image = "aircompressor.jpg",
                amount = 500
                },
                new Kart()
                {
                id = 6,
                title = "DeWalt 20V MAX XR Impact Driver Kit",
                price = 299.00,
                description = "DEWALT 20V MAX XR 3-SPEED IMPACT DRIVER KIT The DCF887M2 20V MAX* XR® Brushless 1/4 in. 3-Speed Impact Driver is compact for fitting in tight spaces and increasing productivity. ",
                category = "Power Tools",
                image = "Dewalt.jpg",
                amount = 500
                },
            };
        }

        public List<ShoppingCart.Entity.Domain.Kart> GetKart(string searchProduct)
        {
            try
            {
                if (searchProduct != string.Empty && searchProduct != null)
                    return myKart.Where(x =>
                    x.title.Contains(searchProduct) || x.description.Contains(searchProduct) || x.category.Contains(searchProduct)).ToList<Kart>();
            }
            catch(Exception ex)
            { 
            }

            return myKart;
        }

    }
}
