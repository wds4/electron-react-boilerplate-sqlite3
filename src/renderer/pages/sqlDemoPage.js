import React from 'react';
import Masthead from './mastheads/mainMasthead.js';
import LeftNavbar from './navbars/leftNav.js';
import * as MiscAppFxns from "./lib/app/misc.ts";
import SqlDemoApp from "./sqlDemoApp.js"

const updateMainColWidth = MiscAppFxns.updateMainColWidth;

export default class SqlDemoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        updateMainColWidth();
    }
    render() {
        return (
            <>
                <div id="menuCol" className="menuCol" >
                    <LeftNavbar />
                </div>
                <div id="mainCol" >
                    <Masthead />
                    <div id="mainPanel" >
                        <SqlDemoApp />
                    </div>
                </div>
            </>
        );
    }
}
