


/*
export  function JokeDataFecth(){
    const  url="https://geek-jokes.sameerkumar.website/api?format=json";
    let joke;
    fetch(url)
    .then(res=> res.json())
    .then(data=> {
         joke=data.joke
         console.log("joke:"+joke)
        }) 
    console.log("joke: "+joke)
    return(
    <div className="jokePrinting">
            {joke&&<div>joke:{joke} </div>}
    </div>)

    } 
*/

/*

export default function JokeDataFecth(){
    const  url="https://geek-jokes.sameerkumar.website/api?format=json";
    fetch(url)
    .then(res=> res.json())
    .then(data=> {
        console.log("data:"+data)
        JokeComponent=data.joke
        console.log("JokeComponent:"+ JokeComponent)
        return(
            JokeComponent
        )}
    )
    }

    */