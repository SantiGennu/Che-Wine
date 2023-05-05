import "./itemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <div className="container">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
