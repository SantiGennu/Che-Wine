import { TbShoppingCartPlus } from "react-icons/tb";
import "./item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// import { Context } from "../ItemListContainer/ItemListContainer";
const Item = ({ product }) => {
  // const { product } = useContext(Context);
  return (
    <div className=" card-container">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="card-body">
          <Card.Title className="name-item">{product.name}</Card.Title>
          <Card.Text className="variaty-item"> {product.variaty} </Card.Text>
          <Card.Text className="price-item">$ {product.price}</Card.Text>
          <div className="btn-container">
            <div className="btn-detail">
              <Link to={`/detail/${product.id}`}>
                <Button className="btn-moreDetail">More Details</Button>
              </Link>
            </div>
            <div className="btn-cart"></div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
