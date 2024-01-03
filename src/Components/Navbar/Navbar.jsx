import "./Navbar.scss"
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">

          <Link to="/" ><img className="mainLogo" src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="Logo" /></Link>
          <div className="navMenu">
              <div className="one">
                <img src="https://st.redbus.in/web/images/layout/rb_vertical.svg" alt="redbus logo" />
                <span>Bus Tickets</span>
              </div>
              <div className="one">
                <img src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" alt="Ryde logo" />
                <span>Cab Rental</span>
              </div>
              <div className="one">
                <img src="https://st.redbus.in/web/images/layout/rail_vertical.svg" alt=" Train logo" />
                <span>Train Tickets</span>
              </div>
          </div>

        </div>

        <div className="right">

          <div className="helpSection">
              <HeadsetMicOutlinedIcon />
              <span>Help</span>
          </div>
          <div className="helpSection">
              <AccountCircleOutlinedIcon />
              <span>Account</span>
              <KeyboardArrowDownOutlinedIcon />
              <div className="options">
                <Link to='/login'><span>Login</span></Link>
                <Link to="/register"><span>Register</span></Link>
              </div>
          </div>

        </div>

    </div>
  )
}

export default Navbar