import { Link } from 'react-router-dom'
import './Navbar.css';
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import {useNavigate} from "react-router-dom"



const Navbar = () => {

  const navigate = useNavigate();

  const verifyToken= localStorage.getItem('token')
  console.log(verifyToken);
  const removeToken = ()=>{
    localStorage.clear()
    navigate("/")
    window.location.reload();
  }


  return (
    <div className="navbar">
        <div className="leftNav">
          <Link to="/"> <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="mainLogo" /> </Link>
        </div>
        <div className="middleNav">
          <Link to="/">
              <div className="navMenu">
                    <img src="https://st.redbus.in/web/images/layout/rb_vertical.svg" alt="redbus logo" />
                    <span>Bus Tickets</span>
              </div>
          </Link>
          <Link to="/cab">
              <div className="navMenu">
                    <img src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" alt="Ryde logo" />
                    <span>Cab Rental</span>
              </div>
          </Link>
          <Link to="/train">
              <div className="navMenu">
                    <img src="https://st.redbus.in/web/images/layout/rail_vertical.svg" alt=" Train logo" />
                    <span>Train Tickets</span>
              </div>
          </Link>
        </div>
        <div className="rightNav">
          <div className="helpSection">
              <RiCustomerService2Line className='icon' />
              <span>Help</span>
          </div>
          <div className="helpSectionOne">
              <div className="one">
                <MdOutlineAccountCircle className='icon' />
                <span>Account</span>
              </div>
              <div className="options">
                {verifyToken?<Link ><span onClick={removeToken}>Logout</span></Link>:verifyToken==null? <Link to='/login'><span>Login</span></Link>:null}
                {verifyToken? null : <Link to="/register"><span>Register</span></Link>}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar