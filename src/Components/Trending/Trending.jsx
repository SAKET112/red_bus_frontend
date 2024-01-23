import './Trending.css';
import { FaCopy } from "react-icons/fa6";

const Trending = () => {
  return (
    <div className="trending-offers-container">
      <h2>Trending Offers</h2>
      <div className="offers">
        <div className="offer-card" style={{backgroundImage:'linear-gradient(71.04deg, rgb(12, 57, 139) -6.92%, rgb(62, 118, 216) 109.43%)', color:"#FFF"}}>
          <img src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" alt="Offer Image" style={{width:"72px", height:'72px'}} />
          <div className="offer-details">
            <span style={{ padding: '4px', fontSize: '12px', border:"1px dotted", width:"35px", borderRadius:"5px", backgroundColor:'rgba(255, 255, 255, 0.6)' }}>BUS</span>
            <p style={{ fontSize: '16px', fontWeight:"bold" }}>Save up to Rs 250 on bus tickets</p>
            <p style={{ fontSize: '13px', fontWeight:"200" }}>Valid till 31 Jan</p>
            <div className="coupon-container">
              <span style={{border:"1px dashed", padding:'5px', borderRadius:"10px"}}>FIRST</span>
              <FaCopy />
            </div>
          </div>
        </div>


        <div className="offer-card" style={{backgroundImage:'linear-gradient(71.04deg, rgb(39, 57, 101) -6.92%, rgb(80, 210, 149) 109.43%)', color:"#FFF"}}>
          <img src="https://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80.png" alt="Offer Image" style={{width:"72px", height:'72px'}} />
          <div className="offer-details">
            <span style={{ padding: '4px', fontSize: '12px', border:"1px dotted", width:"35px", borderRadius:"5px", backgroundColor:'rgba(255, 255, 255, 0.6)' }}>BUS</span>
            <p style={{ fontSize: '16px', fontWeight:"bold" }}>Save up to Rs 300 on AP, TS routes</p>
            <p style={{ fontSize: '13px', fontWeight:"200" }}>Valid till 31 Jan</p>
            <div className="coupon-container">
              <span style={{border:"1px dashed", padding:'5px', borderRadius:"10px"}}>SUPERHIT</span>
              <FaCopy />
            </div>
          </div>
        </div>


        <div className="offer-card" style={{backgroundImage:'linear-gradient(71.04deg, rgb(72, 0, 4) -6.92%, rgb(216, 78, 85) 109.43%)', color:"#FFF"}}>
          <img src="https://st.redbus.in/Images/INDOFFER/BUS300/80x801.png" alt="Offer Image" style={{width:"72px", height:'72px'}} />
          <div className="offer-details">
            <span style={{ padding: '4px', fontSize: '12px', border:"1px dotted", width:"35px", borderRadius:"5px", backgroundColor:'rgba(255, 255, 255, 0.6)' }}>BUS</span>
            <p style={{ fontSize: '16px', fontWeight:"bold" }}>Max 20% off up to Rs 300 on Delhi, North</p>
            <p style={{ fontSize: '13px', fontWeight:"200" }}>Valid till 31 Jan</p>
            <div className="coupon-container">
              <span style={{border:"1px dashed", padding:'5px', borderRadius:"10px"}}>BUS300</span>
              <FaCopy />
            </div>
          </div>
        </div>


        <div className="offer-card" style={{backgroundImage:'linear-gradient(71.04deg, rgb(14, 113, 67) -6.92%, rgb(115, 236, 179) 109.43%)', color:"#FFF"}}>
          <img src="https://st.redbus.in/Images/INDOFFER/274x147/BUS300.png" alt="Offer Image" style={{width:"72px", height:'72px'}} />
          <div className="offer-details">
            <span style={{ padding: '4px', fontSize: '12px', border:"1px dotted", width:"35px", borderRadius:"5px", backgroundColor:'rgba(255, 255, 255, 0.6)' }}>BUS</span>
            <p style={{ fontSize: '16px', fontWeight:"bold" }}>Save up to Rs 200 on Karnataka, tamil</p>
            <p style={{ fontSize: '13px', fontWeight:"200" }}>Valid till 31 Jan</p>
            <div className="coupon-container">
              <span style={{border:"1px dashed", padding:'5px', borderRadius:"10px"}}>CASH200</span>
              <FaCopy />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending