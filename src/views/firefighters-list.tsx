import './firefighter-list.scss';
import 'antd/dist/antd.css';

import { Button } from 'antd';
import Firefighter from './firefighter';
import React from 'react';

const FirefightersList: React.FC = () => {
  return (
    <div className="App">
      <Button type="primary">Dodaj</Button>
      <Firefighter></Firefighter>
    </div>
  );
}

export default FirefightersList;
