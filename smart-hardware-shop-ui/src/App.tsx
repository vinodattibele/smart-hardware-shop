import { Badge, Drawer, Grid, LinearProgress, TextField } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { Wrapper, StyledButton, Title, Banner, Search } from "./App.styles";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import "./styles.css";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

let searchProduct = "";

const getProducts = async (): Promise<CartItemType[]> => {
  if(searchProduct === "") 
    //http://localhost:8080/https://localhost:5001/cart/GetProductList
    return await (await fetch("https://localhost:5001/cart/GetProductList")).json();
  else
      return await (await fetch("https://localhost:5001/cart/GetProductList?searchProduct="+searchProduct)).json();
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  let { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  
  const getTotalItems = (items: CartItemType[]) => {
   return items.reduce((acc, item) => acc + item.amount, 0);
  }

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleChange = async(e:any) => {
    data = [];
    searchProduct = e.target.value;
    data = await getProducts();
  };

  const handleEmptyCart = () => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        return acc;
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <Title><h5>Smart Hardware Shop</h5></Title>
      <Banner>
        <img src={require(`./Image/banner.jpg`)} alt="News Banner"/>
      </Banner>
      <Search>
        <TextField id="Search-products" label="Search Products" variant="outlined" onChange={handleChange}/>
      </Search>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
        />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}