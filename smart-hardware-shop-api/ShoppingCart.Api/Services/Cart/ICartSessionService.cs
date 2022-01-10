using System.Collections.Generic;

namespace ShoppingCart.Api.Services.Cart
{
    public interface ICartSessionService
    {
        List<ShoppingCart.Entity.Domain.Kart> GetKart(string searchProduct); //read from session
    }
}
