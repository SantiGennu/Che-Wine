
import "./itemList.css"
import Item from "../Item/Item";


const ItemList = ({ products }) => {

    return (

        < div className='container' >
            {products.map((item) =>

                <Item key={item.id} products={item} />
            )

            }
        </div>


    )
}



export default ItemList