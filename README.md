# smart-hardware-shop
Smart hardware shop cart has Two folders 
- smart-hardaware-shop-ui 
    contains for frontend code and test cases(Jest, Enzyme)
- smart-hardaware-shop-api
    contains backend api code and test cases(Nunit testing)

Both solutions contians unit test cases

To run appllication,
# smart-hardware-shop-ui
-Open folder "smart-hardware-shop-ui" in visual code, right click on 'smart-hardaware-shop-ui' folder and select 'open integrated terminal'

- to run ui use cmd "npm run start"
    
- to run test case use cmd "npm run test"

# smart-hardware-shop-api
-Open folder "smart-hardware-shop-api" in visual code,expand folder "smart-hardware-shop-api" right click on "ShoppingCart.Api" folder, 
select "Open in terminal"
run application using below cmd,

- dotnet run
- browse url https://localhost:5001/cart/GetProductList
- returns JSON object
