import "./Trending.scss";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';


const offers = [
    {
        id : 1,
        image : "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
        top : "BUS",
        title : "Save up to Rs 250 on bus tickets",
        validity : "Valid till 31 Jan",
        couponCode: "FIRST"
    },
    {
        id : 2,
        image : "https://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80.png",
        top : "BUS",
        title : "Save up to Rs 300 on AP, TS routes",
        validity : "Valid till 31 Jan",
        couponCode: "SUPERHIT"
    },
    {
        id : 3,
        image : "https://st.redbus.in/Images/INDOFFER/BUS300/80x801.png",
        top : "BUS",
        title : "Max 20% off up to Rs 300 on Delhi, North",
        validity : "Valid till 31 Jan",
        couponCode: "BUS300"
    },
    
    
]

const Trending = () => {
  return (
    <>
    <div className="trendingContainer">
        <div className="trendingHeader">
            <h1>TRENDING OFFERS</h1>
            <span>View All</span>
        </div>
        <div className="offerSection">
            {
                offers.map((item) => 

                    <div className="offer" key={item.id}>
                        <img src={item.image} alt="logos" />
                        <div className="right">
                            <span className="top">{item.top}</span>
                            <p className="title">{item.title}</p>
                            <p className="validity">{item.validity}</p>
                            <div className="coupon">
                                <span className="code">{item.couponCode}</span>
                                <ContentCopyOutlinedIcon />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
         <img className="offerBanner" src="https://st.redbus.in/Images/99/webreferal.png" alt="" />   
    </div>

    </>
  )
}

export default Trending