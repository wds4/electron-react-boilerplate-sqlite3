import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import * as MiscAppFxns from './pages/lib/app/misc.ts';

import Home from './pages/home.js';
import SqlDemo from './pages/sqlDemoPage.js';

import './css/app.css';
import './css/navbars.css';
import './css/mastheads.css';

const updateMainColWidth = MiscAppFxns.updateMainColWidth;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {
        window.addEventListener('resize', updateMainColWidth);
    }
    render() {
        return (
            <fieldset id="app" >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/SqlDemo" element={<SqlDemo />} />
                    </Routes>
                </Router>
            </fieldset>
        );
    }
}
