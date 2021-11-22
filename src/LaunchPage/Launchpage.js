import React from "react";
import './launchpage.css'
import smile from './joke-icon.jpeg'
class LaunchPage extends React.Component {
    render() {
      
        return (
            <React.Fragment>
                <div className="jumbotron" id="jumbo">
                    <h1 className="display-3">StressFree Reliver</h1>
                    <p className="lead">stress is common, but coming out of it is Fun!!</p>
                    <p>Try these activities, and enjoy!</p>
                </div>  
                <div className="container container-fluid">
                    <div className="row">
                    <div className="col" id="joke">
                        <img height="50em" width="50em" src={smile} alt="jokelogo"></img>
                    </div>
                </div>
            </div>
                
            </React.Fragment>
        )
    }
}
export default LaunchPage;