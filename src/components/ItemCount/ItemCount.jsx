import React from "react";
import Button from "react-bootstrap/Button";
import { UseCount } from "../../Hooks/UseCount";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, increment, decrement, reset } = UseCount();

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="counter">
        <Button
          className="btn-counter"
          onClick={decrement}
          disabled={count <= initial}
        >
          -
        </Button>
        <span className="count">{count}</span>
        <Button
          className="btn-counter"
          onClick={increment}
          disabled={count === stock}
        >
          +
        </Button>
        <Button className="btn-add" onClick={handleOnAdd}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
