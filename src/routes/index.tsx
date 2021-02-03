import React from 'react';

import { Route, Switch } from 'react-router-dom';
import BookPage from '../pages/BookPage';
import Home from '../pages/Home';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book" component={BookPage} />
    </Switch>
);

export default Routes;