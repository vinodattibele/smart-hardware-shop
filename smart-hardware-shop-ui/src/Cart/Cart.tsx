import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  handleEmptyCart: () => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart, handleEmptyCart }: Props) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2 className="totalItems">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => handleEmptyCart()}
          >
            Empty Cart
          </Button>
    </Wrapper>
  );
};

export default Cart;
