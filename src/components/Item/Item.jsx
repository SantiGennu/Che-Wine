
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TbShoppingCartPlus } from "react-icons/tb"
import "./item.css"
const Item = ({ product }) => {

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body className='card-body'>
                <Card.Title className='name-item'>{product.name}</Card.Title>
                <Card.Text className='variaty-item'> {product.variaty} </Card.Text>
                <Card.Text className='price-item'>
                    $ {product.price}
                </Card.Text>
                <div className='btn-container'>
                    <div className='btn-detail'>
                        <Button>More Details</Button>
                    </div>
                    <div className='btn-cart'>
                        <Button className="button"><span>
                            <TbShoppingCartPlus />
                        </span></Button>
                    </div>



                </div>
            </Card.Body>
        </Card>
    )
}



export default Item