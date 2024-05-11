import React from 'react';
import PropTypes from 'prop-types';
import './TruckItem.less';

const TruckItem = ({ locationDes, foodItems }) => {
  return (
    <div className="truckItem">
      <p className="location">location: {locationDes}</p>
      <p className="food">foods: {foodItems}</p>
    </div>
  );
};

TruckItem.defaultProps = {
  locationDes: '',
  foodItems: '',
};

TruckItem.propTypes = {
  locationDes: PropTypes.string,
  foodItems: PropTypes.string,
};

export default TruckItem;
