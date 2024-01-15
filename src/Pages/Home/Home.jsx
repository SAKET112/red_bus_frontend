import Country from "../../Components/Countries/Country"
import Enjoy from "../../Components/Enjoy/Enjoy"
import Footer from "../../Components/Footer/Footer"
import Partnered from "../../Components/Partnered/Partnered"
import Primo from "../../Components/Primo/Primo"
import PrivateBus from "../../Components/PrivateBus/PrivateBus"
import Rental from "../../Components/Rental/Rental"
import Search from "../../Components/Search/Search"
import Trending from "../../Components/Trending/Trending"
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <Search />
      <Trending />
      <Rental />
      <Enjoy />
      <Primo />
      <Partnered />
      <PrivateBus />
      <Country />
      <Footer />
    </div>
  )
}

export default Home