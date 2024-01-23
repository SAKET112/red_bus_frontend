import "./Enjoy.css";

const Enjoy = () => {
  return (
    <>
    
    <div className="enjoy-container">
      <div className="enjoy-heading">ENJOY THE APP!</div>
      <div className="enjoy-content">
        <div className="quick-access">
          <div className="quick-heading">
            <div className="quick-heading-txt">
              <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="" />
              <p>Quick access</p>
            </div>
            <div className="quick-heading-txt">
              <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="" />
              <p>Superior live tracking</p>
            </div>
          </div>
          <div className="quick-content-container">
            <div className="quick-content quick-content-first">
              <h3>4.5 ⭐</h3>
              <p>50M+ downloads</p>
              <h5>Play Store</h5>
            </div>
            <div className="quick-content">
              <h3>4.6 ⭐</h3>
              <p>50M+ downloads</p>
              <h5>App Store</h5>
            </div>
          </div>
        </div>

        <div className="qr-container">
          <div className="qr">
            <h4>Scan to download</h4>
            <img src="https://s1.rdbuz.com/web/images/homeV2/qrCode.svg" alt="" />
          </div>
          <div className="download">
            <h4>Download the App on</h4>
            <img src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg" alt="" />
            <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg" alt="" />
          </div>
        </div>
      </div>
      
    </div>
    <div className="mediaScreen">
        <h3>Get the redBus App</h3>
        <p>Rated <span>4.5⭐</span> on Playstore</p>
        <p>Download for exciting offers</p>
        <img src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg" alt="" />
      </div>
    </>
  )
}

export default Enjoy