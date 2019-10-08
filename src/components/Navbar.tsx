// import './firefighter.scss';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import FirefightersList from '../views/firefighters-list';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <Router>
        <div>
            <nav className="Navbar">
                <ul>
                    <li>
                        <Link to="/firefighters-list">Strażacy</Link>
                    </li>
                    <li>
                        <Link to="/actions">Wyjazdy</Link>
                    </li>
                    <li>
                        <Link to="/vehicles">Pojazdy</Link>
                    </li>
                    <li>
                        <Link to="/medical-examination">Badania lekarskie</Link>
                    </li>
                    <li>
                        <Link to="/payments">Składki</Link>
                    </li>
                    <li>Wyloguj</li>
                </ul>
            </nav>
        </div>
        <Switch>
            <Route path="/firefighters-list">
                <FirefightersList />
            </Route>
        </Switch>
    </Router>
  );
}

export default Navbar;
