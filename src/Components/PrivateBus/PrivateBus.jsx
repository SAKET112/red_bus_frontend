import "./PrivateBus.scss";

const travels = [
    {
        id: 1,
        name: 'SRS Travels'
    },
    {
        id: 2,
        name: 'Evacay Bus'
    },
    {
        id: 3,
        name: 'Kallada Travels'
    },
    {
        id: 4,
        name: 'KPN Travels'
    },
    {
        id: 5,
        name: 'Orange Travels'
    },
    {
        id: 6,
        name: 'Parveen Travels'
    },
    {
        id: 7,
        name: 'Rajdhani Express'
    },
    {
        id: 8,
        name: 'Chartered Speed...'
    },
    {
        id: 9,
        name: 'Bengal Tiger'
    },
    {
        id: 10,
        name: 'SRM Travels'
    },
    {
        id: 11,
        name: 'Infant Jesus'
    },
    {
        id: 12,
        name: 'Patel Travels'
    },
    {
        id: 13,
        name: 'JBT Travels'
    },
    {
        id: 14,
        name: 'Shatabdi Travels'
    },
    {
        id: 15,
        name: 'Eagle Travels'
    },
    {
        id: 16,
        name: 'Kanker Roadways'
    },
    {
        id: 17,
        name: 'Komitla'
    },
    {
        id: 18,
        name: 'Sri Krishna Travels'
    },
    {
        id: 19,
        name: 'Humsafar Travels'
    },
    {
        id: 20,
        name: 'Mahasagar Travels'
    },
    {
        id: 21,
        name: 'Raj Express'
    },
    {
        id: 22,
        name: 'Sharma Travels'
    },
    {
        id: 23,
        name: 'Shrinath Travels'
    },
]

const PrivateBus = () => {
  return (
    <div className="operators">
      <div className="operators-heading">
        <span>3500+ Private Bus Operators</span>
        <button>View All</button>
      </div>
      <div className="operatorsName">
        {
            travels.map((item) => (
                <div  key={item.id}>
                    <span>{item.name}</span>
                </div>
            ))
        }
        
        </div>
    </div>
  );
};

export default PrivateBus;
