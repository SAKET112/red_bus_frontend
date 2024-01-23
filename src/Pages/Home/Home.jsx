import Banner from '../../Components/Banner/Banner';
import Country from '../../Components/Country/Country';
import Enjoy from '../../Components/Enjoy/Enjoy';
import Footer from '../../Components/Footer/Footer';
import Partnered from '../../Components/Partnered/Partnered';
import Primo from '../../Components/Primo/Primo';
import Rental from '../../Components/Rental/Rental';
import Search from '../../Components/Search/Search';
import Trending from '../../Components/Trending/Trending';
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <Search />
      <Trending />
      <Banner /> 
      <Rental /> 
      <Enjoy />
      <Primo />
      <Country />
      <Partnered />
      <Footer />
    </div>
  )
}

export default Home