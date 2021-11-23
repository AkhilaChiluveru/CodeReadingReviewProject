import React from "react";
import './launchpage.css'

class LaunchPage extends React.Component {
    render() {
      
        return (
            <React.Fragment>
                <div className="jumbotron" id="jumbo">
                    <h1 className="display-3">StressFree Reliver</h1>
                    <p className="lead">Stress is common, but coming out of it is Fun!!</p>
                    <p>Try these activities, and enjoy!</p>
                </div>    
            </React.Fragment>
        )
    }
}
export default LaunchPage;