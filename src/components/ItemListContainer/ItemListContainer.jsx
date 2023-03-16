import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({ greetings }) => {
    return (
        <h3 className='greetings'> {greetings}</h3>
    )
}

export default ItemListContainer