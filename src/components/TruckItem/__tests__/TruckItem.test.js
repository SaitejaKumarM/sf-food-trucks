import React from 'react';
import { render } from '@testing-library/react';
import TruckItem from '../TruckItem';

describe('<TruckItem />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <TruckItem
        locationDes="MARKET ST: DRUMM ST intersection"
        foodItems="Fried Chicken: Fried Fish: Greens: Mac & Cheese: Peach Cobbler: and String beans"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
