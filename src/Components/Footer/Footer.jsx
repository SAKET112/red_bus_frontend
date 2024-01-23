import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
      <div className="top-footer">
        <div className="top-footer-column">
          <div className="top-footer-column-header">Top RTCs</div>
          <div className="top-footer-column-content">
            <div>APSRTC</div>
            <div>GSRTC</div>
            <div>MSRTC</div>
            <div>TNSTC</div>
            <div>View All</div>
          </div>
        </div>
        <div className="top-footer-column">
          <div className="top-footer-column-header">Others</div>
          <div className="top-footer-column-content">
            <div>TSRTC</div>
            <div>SBSTC</div>
            <div>RSRTC</div>
            <div>Kerala RTC</div>
            <div>View All</div>
          </div>
        </div>
        <div className="top-footer-column">
          <div className="top-footer-column-header">Top bus routes</div>
          <div className="top-footer-column-content">
            <div>Hyderabad to Bangalore Bus</div>
            <div>Bangalore to Chennai Bus</div>
            <div>Pune to Bangalore Bus</div>
            <div>Mumbai to Bangalore Bus</div>
            <div>View All</div>
          </div>
        </div>
        <div className="top-footer-column">
          <div className="top-footer-column-header">Top cities</div>
          <div className="top-footer-column-content">
            <div>Hyderabad Bus Tickets</div>
            <div>Bangalore Bus Tickets</div>
            <div>Chennai Bus Tickets</div>
            <div>Pune Bus Tickets</div>
            <div>View All</div>
          </div>
        </div>
        <div className="top-footer-column">
          <div className="top-footer-column-header">
            Tempo Traveller in cities
          </div>
          <div className="top-footer-column-content">
            <div>Tempo traveller in Bangalore</div>
            <div>Tempo traveller in Chennai</div>
            <div>Tempo traveller in Mumbai</div>
            <div>Tempo traveller in Hyderabad</div>
            <div>Tempo traveller in Ahmedabad</div>
          </div>
        </div>
      </div>
      <div className="horizontal-separator"></div>
      <div className="middle-footer">
        <div className="middle-footer-left">
          <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="" />
          <div>
            redBus is the world's largest online bus ticket booking service
            trusted by over 25 million happy customers globally. redBus offers
            bus ticket booking through its website, iOS and Android mobile apps
            for all major routes.
          </div>
        </div>
        <div className="middle-footer-right">
          <div className="middle-footer-column">
            <div className="middle-footer-column-header">About redBus</div>
            <div className="middle-footer-column-content">
              <div>About us</div>
              <div>Investor Relations</div>
              <div>Contact us</div>
              <div>Mobile version</div>
              <div>redBus on mobile</div>
              <div>Sitemap</div>
              <div>Offers</div>
              <div>Careers</div>
              <div>Values</div>
            </div>
          </div>
          <div className="middle-footer-column">
            <div className="middle-footer-column-header">Info</div>
            <div className="middle-footer-column-content">
              <div>T&C</div>
              <div>Privacy policy</div>
              <div>FAQ</div>
              <div>Blog</div>
              <div>Bus operator registration</div>
              <div>Agent registration</div>
              <div>Insurance partner</div>
              <div>User agreement</div>
            </div>
          </div>
          <div className="middle-footer-column">
            <div className="middle-footer-column-header">Global Sites</div>
            <div className="middle-footer-column-content">
              <div>India</div>
              <div>Singapore</div>
              <div>Malaysia</div>
              <div>Indonesia</div>
              <div>Peru</div>
              <div>Columbia</div>
            </div>
          </div>
          <div className="middle-footer-column">
            <div className="middle-footer-column-header">Our Partners</div>
            <div className="middle-footer-column-content">
              <div>Goibibo Bus</div>
              <div>Goibibo Hotels</div>
              <div>Makemytrip Bus</div>
              <div>Makemytrip hotels</div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-separator"></div>
      <div className="bottom-footer">
        <div className="bottom-footer-left">
          © All rights reserved (2024) by ❤️ Saket
        </div>
        <div className="bottom-footer-right">
          <img src="https://st.redbus.in/web/images/layout/social_facebook_new.svg" alt="" />
          <img src="https://st.redbus.in/web/images/layout/social_linkedin_new.svg" alt="" />
          <img src="https://st.redbus.in/web/images/layout/social_twitter_new.svg" alt="" />
          <img src="https://st.redbus.in/web/images/layout/social_instagram_new.svg" alt="" />
        </div>
      </div>
    </div>
    )
}

export default Footer;