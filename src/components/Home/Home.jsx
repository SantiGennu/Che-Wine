
import Slider from "../Carousel/Slider"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Navbar from "../Navbar/NavBar"

const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <hr />
            <ItemListContainer greetings={"Welcome to Che Wine"} />
            <ItemDetailContainer />

        </>


    )
}
export default Home