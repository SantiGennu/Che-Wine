import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Navbar from "../Navbar/NavBar"

const Home = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer greetings={"Welcome to Che Wine"} />
        </>


    )
}
export default Home