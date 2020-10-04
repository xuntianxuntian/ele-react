import React from 'react';
import { Switch, Route } from 'react-router'
import Welcome from './containers/welcome'
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = hot(module)(() => (
    <Switch>
        <Route path="/" component={Welcome} />
    </Switch>
));

export default App