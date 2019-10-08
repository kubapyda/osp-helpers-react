// import './firefighter.scss';

import { Icon, Menu } from 'antd';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import FirefightersList from '../views/firefighters-list';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <Router>
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="firefighters-list">
                {/* <Icon type="mail" /> */}
                <Link to="/firefighters-list">Strażacy</Link>
            </Menu.Item>
            <Menu.Item key="actions">
                {/* <Icon type="appstore" /> */}
                <Link to="/actions">Wyjazdy</Link>
            </Menu.Item>
            <Menu.Item key="vehicles">
                <Link to="/vehicles">Pojazdy</Link>
            </Menu.Item>
            <Menu.Item key="medical-examination">
                <Link to="/medical-examination">Badania lekarskie</Link>
            </Menu.Item>
            <Menu.Item key="payments">
                <Link to="/payments">Składki</Link>
            </Menu.Item>
        </Menu>
        <Switch>
            <Route path="/firefighters-list">
                <FirefightersList />
            </Route>
        </Switch>
    </Router>
  );
}

export default Navbar;
