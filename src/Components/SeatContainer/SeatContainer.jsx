import PropTypes from 'prop-types';
import './SeatContainer.css';

const SeatContainer = ({ seatNumber, isSelected, isReserved, onClick }) => {

    const seatClass = isSelected ? 'selected' : isReserved ? 'reserved' : '';

  return (
    <div className={`bus-seat ${seatClass}`} onClick={() => onClick(seatNumber)}>
        {seatNumber}
    </div>
  )
}

SeatContainer.propTypes = {
    seatNumber: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    isReserved: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default SeatContainer