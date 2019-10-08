import './firefighter.scss';

import Button from '@material-ui/core/Button';
import React from 'react';

const FirefightersList: React.FC = () => {
  return (
    <div className="App">
        <Button variant="contained" color="primary">
            Dodaj
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
    </div>
  );
}

export default FirefightersList;
