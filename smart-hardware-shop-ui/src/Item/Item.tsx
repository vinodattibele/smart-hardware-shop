import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";


type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = ({ item, handleAddToCart }: Props) => {
  return (
    <Wrapper>
      <img src={require(`../Image/${item.image}`)} alt={item.title} />
      <div>
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h3 className="price">${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
