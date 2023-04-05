import { Button, Card } from "react-bootstrap";
import ItemCount from "../Item/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <Card className="card-detail" style={{ width: "30rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="card-variaty"> {product.variaty} </Card.Text>
        <Card.Text className="card-text">{product.description}</Card.Text>
        <Card.Text className="card-price">$ {product.price}</Card.Text>
        <div className="buttons-container">
          <ItemCount stock={3} initial={1} />
          <div className="btn-cart">
            <Button className="button">
              <span>{/* <TbShoppingCartPlus /> */}</span>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
