import React, { useEffect, useState } from 'react';
import TruckList from './components/TruckList';

import './styles/normalize.less';
import './styles/variables.less';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/public/food_trucks_data.json').then((res) => {
      res.json().then((data) => {
        setList(data);
      });
    });
  }, []);

  return <TruckList list={list} />;
};

export default App;
