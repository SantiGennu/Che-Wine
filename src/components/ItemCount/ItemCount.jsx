import React from "react";
import { Button } from "react-bootstrap";
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
        <Button onClick={decrement} disabled={count <= initial}>
          -
        </Button>
        <span className="count">{count}</span>
        <Button onClick={increment} disabled={count === stock}>
          +
        </Button>
        <Button onClick={handleOnAdd}>Add to cart</Button>
      </div>
    </>
  );
};

export default ItemCount;
