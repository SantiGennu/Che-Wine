import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { CartButtons } from "../CartButtons/CartButtons";

const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (count) => {
    setGoToCart(true);
    console.log(count);
  };

  return (
    <Card className="card-detail" style={{ width: "30rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="card-variaty"> {product.variaty} </Card.Text>
        <Card.Text className="card-text">{product.description}</Card.Text>
        <Card.Text className="card-price">$ {product.price}</Card.Text>
        <div className="buttons-container">
          {goToCart ? (
            <CartButtons />
          ) : (
            <ItemCount initial={1} stock={15} onAdd={onAdd} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
