
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TbShoppingCartPlus } from "react-icons/tb"
import "./item.css"
import ItemCount from './ItemCount';
const Item = ({ products }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.image} />
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text> {products.variaty} </Card.Text>
                <Card.Text>
                    {products.description}
                </Card.Text>
                <Card.Text>
                    $ {products.price}
                </Card.Text>
                <Button className="button"><span>
                    <TbShoppingCartPlus />
                </span></Button>

                <ItemCount stock={3} initial={1} />

            </Card.Body>
        </Card>
    )
}



export default Item