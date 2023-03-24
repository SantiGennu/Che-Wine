import React from 'react'
import { useState } from 'react'
import { Button } from "react-bootstrap"


const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(1)


    const Plus = () => {
        setCount(count + 1)
    }
    const Minus = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div className='counter'>
                <Button onClick={Minus} disabled={count <= initial}>-</Button>
                <span>{count}</span>
                <Button onClick={Plus} disabled={count === stock}>+</Button>

            </div>
        </>
    )
}

export default ItemCount