import React from 'react';
import PropTypes from 'prop-types';
import TruckItem from '../TruckItem/TruckItem';
import './TruckList.less';

const TruckList = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.locationid}>
          <TruckItem
            locationDes={item.LocationDescription}
            foodItems={item.FoodItems}
          />
        </li>
      ))}
    </ul>
  );
};

TruckList.defaultProps = {
  list: [],
};

TruckList.propTypes = {
  list: PropTypes.array,
};

export default TruckList;
