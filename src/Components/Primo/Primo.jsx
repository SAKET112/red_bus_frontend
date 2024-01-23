import './Primo.css';

const Primo = () => {
  return (
    <div className="primo-img">
      <img src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg" alt="" />
      <div className="primo-subContainer">
        <div className="primo-card">
          <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg" alt="" />
          <div className="primo-content">
            <h4>1 of 5 buses quality</h4>
            <p>
              Primo’s strict safety qualification ensures a safer travel for you
            </p>
          </div>
        </div>
        <div className="primo-card">
          <img src="https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg" alt="" />
          <div className="primo-content">
            <h4>Preferred by 90%</h4>
            <p>
              90% of travellers re-book Primo buses for its punctuality and
              comfort
            </p>
          </div>
        </div>
        <div className="primo-card">
          <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg" alt="" />
          <div className="primo-content">
            <h4>9 Lac+ monthly travellers</h4>
            <p>In 2022, 9 Lac+ people traveled with Primo every month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Primo