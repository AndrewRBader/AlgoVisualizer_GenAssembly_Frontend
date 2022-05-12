import { useState, useEffect } from "react";
import React from 'react'

function Index(props) {

  console.log(props.href)

    // create state to hold projects
    const [algorithms, setAlgorithms] = useState([]);
    //create function to make api call
    const getAlgorithmsData = async () => {
      //make api call and get response
      const response = await fetch(props.href);
      // turn response into javascript object
      const data = await response.json();
      // set the projects state to the data
      setAlgorithms(data);
    };
  
    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => 
      getAlgorithmsData(), []);

    
  
    const displayAlgorithms = (props) =>{
      return(
          <>
          {props.map((algorithm) => {
          return(
            <div 
              key = {algorithm.name}>
              <h2>{algorithm.name}</h2>
              <img src = {algorithm.image} alt = {algorithm.name} />
              <p>{algorithm.description}</p> 
            </div>
            
          )
        })}
          </>
      )
    }

    console.log(algorithms)
  
  return (
    <div>
    <a href = "/">Algorithm Home Page</a>
    <h1>Algorithm Index Page</h1>
    {displayAlgorithms(algorithms)}
    </div>
    )
}
  
export default Index;