import React from 'react';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './route.css'

const RouteApp = () => (
    <div className='route'>
        <Router>
            <div className='menu'>
                    <Route exact path="/" component={App}/>
            </div>
        </Router>
    </div>
);

export default RouteApp;