import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../Api";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import "./BestSellers.css";
import { CartContext } from "../../Context/CartProvider";
import { Loading } from "../Loading/Loading";

const BestSellers = () => {
  const { loading, setLoading } = useContext(CartContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    getProduct()
      .then((res) =>
        setBestSellers(res.filter((product) => product.bestSeller === "true"))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="best-sellers">
        <h2 className="best-sellers-title"> Best Sellers </h2>
      </div>

      <div className="bestSellers-container">
        {loading ? (
          <Loading />
        ) : (
          bestSellers.map((product) => (
            <div key={product.id} className=" card-container">
              <Card className="card" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="card-body">
                  <Card.Title className="name-item">{product.name}</Card.Title>
                  <Card.Text className="variaty-item">
                    {product.variaty}
                  </Card.Text>
                  <Card.Text className="price-item">
                    $ {product.price}
                  </Card.Text>
                  <div className="btn-container">
                    <div className="btn-detail">
                      <Link to={`/detail/${product.id}`}>
                        <Button className="btn-moreDetail">More Details</Button>
                      </Link>
                    </div>
                    <div className="btn-cart">
                      <Button className="button">
                        <span>
                          <TbShoppingCartPlus />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BestSellers;
