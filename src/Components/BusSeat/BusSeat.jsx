// BusSeat.js
import PropTypes from 'prop-types';
import './BusSeat.css';

const BusSeat = ({ seatNumber, isSelected, isReserved, onClick }) => {
  const seatClass = isSelected ? 'selected' : isReserved ? 'reserved' : '';

  return (
    <div className={`bus-seat ${seatClass}`} onClick={() => onClick(seatNumber)}>
      {seatNumber}
    </div>
  );
};

BusSeat.propTypes = {
  seatNumber: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  isReserved: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default BusSeat;
