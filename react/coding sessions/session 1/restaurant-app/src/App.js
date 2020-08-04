import React, { useState } from "react";

import "./App.css";
import restaurants from "./restaurants";
import DisplayRestaurant from "./displayRestaurant";
const App = () => {
 
  //useState
   const [restaurantList, setRestaurantList ] = useState(restaurants.businesses)
  //const [flag, setFlag] = useState(false)
  let sortedRestaurants ='';

  const handleClick = () => {
   //setFlag(true)   
    sortedRestaurants = restaurants.businesses.sort((a,b)=>{
      return b.rating - a.rating
    })
    setRestaurantList([...sortedRestaurants])
    console.log('result is ', sortedRestaurants)
  }

  return (
    <div className="Main-container">
      <h1>List of restaurants</h1>
      <button onClick={()=>handleClick()}>Sort by stars</button>
       <DisplayRestaurant restaurantList ={restaurantList}/>
    </div>
  );
};

//{flag ?<DisplayRestaurant />:<DisplayRestaurant results={restaurants} />}
export default App;
