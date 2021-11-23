import React from "react"
//import JokeDataFecth from './jokedatafecth'
/*
export default function Joke(props){
    console.log(props)
    return(
        <div> <h1>{props.joke}</h1> </div>
    )
}
*/


class Joke extends React.Component {
    render() {
      
        return (
            <React.Fragment>
                <div id='jokeDisplay'>
                    <h1>Welcome !!!!</h1>
                </div>
            </React.Fragment>
        )
    }
}
export default Joke;