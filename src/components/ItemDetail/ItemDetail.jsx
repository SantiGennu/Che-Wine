import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { CartButtons } from "../CartButtons/CartButtons";
import { useCartContext } from "../../Context/CartProvider";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct({ ...product, quantity });
  };

  return (
    <Card className="card-detail-detail" style={{ width: "30rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="card-body-detail">
        <Card.Title className="card-title-detail">{product.name}</Card.Title>
        <Card.Text className="card-variaty-detail">{product.variaty}</Card.Text>
        <Card.Text className="card-text-detail">
          {product.description}
        </Card.Text>
        <Card.Text className="card-price-detail">$ {product.price}</Card.Text>
        <div className="buttons-container-detail">
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
