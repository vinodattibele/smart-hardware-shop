using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using ShoppingCart.Api.Controllers;
using ShoppingCart.Api.Services.Cart;

namespace ShoppingCart.Test
{
    public class ShoppingCartTest
    {
        private IServiceCollection _iServiceCollection;
        private CartController controller;
        private ICartSessionService _cartSessionService;

        [SetUp]
        public void Setup()
        {
            _iServiceCollection = new ServiceCollection();
            _cartSessionService = new CartSessionService();
            controller = new CartController(_cartSessionService);
        }

        //Test case to return product list for home page.
        [Test]
        public void GetProductListTest()
        {
            var getCartSummaryResponse = controller.GetProductList(string.Empty);
            Assert.IsNotNull(getCartSummaryResponse);
            Assert.AreEqual(getCartSummaryResponse.Count, 6);
            Assert.Pass();
        }

        //Test case to return product as per the search
        [Test]
        public void SearchProductTest()
        {
            var getCartSummaryResponse = controller.GetProductList("Cordless Air Compressor, 60v 2.5 Gal.");
            Assert.IsNotNull(getCartSummaryResponse);
            Assert.AreEqual(getCartSummaryResponse.Count, 1);
            Assert.AreEqual(getCartSummaryResponse[0].id, 5);
            Assert.AreEqual(getCartSummaryResponse[0].image, "aircompressor.jpg");
            Assert.AreEqual(getCartSummaryResponse[0].price, 319);
            Assert.AreEqual(getCartSummaryResponse[0].title, "Cordless Air Compressor, 60v 2.5 Gal.");
            Assert.AreEqual(getCartSummaryResponse[0].amount, 500);
            Assert.AreEqual(getCartSummaryResponse[0].category, "Power Tools");
            Assert.AreEqual(getCartSummaryResponse[0].description, "DeWALT FLEXVOLT 2.5 GAL. CORDLESS AIR COMPRESSOR. 60V MAX 2.5 gal. cordless air compressor kit");
            Assert.Pass();
        }
    }
}