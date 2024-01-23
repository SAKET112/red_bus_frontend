import "./Partnered.css"

const Partnered = () => {
  return (
    <div className="partnered">
      <div className="partnered-heading">PARTNERED WITH</div>
      <div className="partnered-rtc">
        <span>25 RTCs</span>
        <button>View All</button>
      </div>
      <div className="partnered-buses">
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://st.redbus.in/buslogos/country/ind/logo_group/10283.png" alt="img1" />
            <div>APSRTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://s3.rdbuz.com/web/images/homeV2/rtc/GSRTC.svg" alt="img2" />
            <div>GSRTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://st.redbus.in/Images/carousel/TSRTC.png" alt="img3" />
            <div>TSRTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://st.redbus.in/buslogos/country/ind/logo_group/10823.png" alt="img4" />
            <div>MSRTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg" alt="img5" />
            <div>Kerala RTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://st.redbus.in/buslogos/country/ind/logo_group/16426.png" alt="img6" />
            <div>SBSTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg" alt="img7" />
            <div>RSTC</div>
          </div>
        </div>
        <div className="bus-type">
          <div className="bus-logo">
            <img src="https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg" alt="img8" />
            <div>UPSRTC</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnered