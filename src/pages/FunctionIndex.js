import { useState, useEffect } from "react";
import React from 'react'

function FunctionIndex(props) {

  console.log(props.href)

    // create state to hold projects
    const [functions, setFunctions] = useState([]);
    //create function to make api call
    const getFunctionsData = async () => {
      //make api call and get response
      const response = await fetch(props.href);
      // turn response into javascript object
      const data = await response.json();
      // set the projects state to the data
      setFunctions(data);
    };
  
    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getFunctionsData(), []);

    
    
  
    const displayFunctions = (props) =>{

        let result = null
        let algoFunction = null
        let inputs = []

        const runFunction = (e) =>{
            
            algoFunction = new Function("function algoFunction" + e + "; return algoFunction")
            console.log("this is the value " + algoFunction)
            inputs = [2, 3]
            result = algoFunction.call({}).call({}, inputs[0], inputs[1]);
        }

        const inputArrayDisplay = (e) => {
            let inputs = "input array [index:value] ";
            for (let i = 0; i<e.length; i++){
              inputs += `${i}:${e[i]}; `
            }
            return(inputs)
        }

      return(
          <>
          {props.map((expression) => {
          return(
            <div 
              key = {expression.name}>
              <h2>{expression.name}</h2>
              <div id = "script"> 
              <script id = {expression.name} src="javascript.js">{runFunction(expression.value)} </script>
                <h3>{inputArrayDisplay(inputs)}</h3>
                <h3>Algorithm: {expression.value} </h3>
                <h2>Result: {result}</h2>
                </div>
              </div>
          )
        })}
          </>
      )
    }


    console.log(functions)
  
  return (
    <div>
    <a href = "/">Algorithm Home Page</a>
    <h1>Functions Index Page</h1>
    {displayFunctions(functions)}
    </div>
    )
}
  
export default FunctionIndex;