import React from 'react';

export default class Masthead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {}
    render() {
        return (
          <>
              <div className="mastheadMainAreaContainer" >
                  <div className="mastheadAppNameContainer" >
                  electron-react-boilerplate-sqlite3
                  </div>
                  <div style={{textAlign:"left",display:"inline-block"}} >
                    <li>database is accessible via renderer process</li>
                    <li>app is production ready</li>
                  </div>
              </div>
          </>
        );
    }
}
