using ShoppingCart.Api.Services.Cart;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ShoppingCart.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ICartSessionService _cartSessionService;

        public CartController(ICartSessionService cartSessionService)
        {
            _cartSessionService = cartSessionService;
        }

        [HttpGet("GetProductList")]
        public List<ShoppingCart.Entity.Domain.Kart> GetProductList(string searchProduct)
        {
            var cart = _cartSessionService.GetKart(searchProduct);

            return cart;
        }
    }
}
