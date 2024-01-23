import "./Country.css"


const country = [
    {
      id: 1,
      name: "colombia",
      imageUrl:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg",
      alt: "colombia",
    },
    {
      id: 2,
      name: "India",
      imageUrl:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg",
      alt: "India",
    },
    {
      id: 3,
      name: "Indonesia",
      imageUrl:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg",
      alt: "Indonesia",
    },
    {
      id: 4,
      name: "Malaysia",
      imageUrl:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg",
      alt: "Malaysia",
    },
    {
      id: 5,
      name: "Peru",
      imageUrl:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Peru.svg",
      alt: "Peru",
    },
    {
      id: 6,
      name: "Singapore",
      imageUrl:
        "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg",
      alt: "Singapore",
    },
  ];

const Country = () => {
  return (
    <div className="global-presence">
      <span>GLOBAL PRESENCE</span>
      <div className="countries">
        {country.map((item) => (
          <div className="country" key={item.id}>
            <div className="global-countries">
              <img src={item.imageUrl} alt={item.alt} />
              <div>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Country