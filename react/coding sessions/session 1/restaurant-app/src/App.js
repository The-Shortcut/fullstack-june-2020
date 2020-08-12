/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import DisplayRestaurant from "./components/DisplayRestaurant";
import Navbar from "./components/Navbar";

const App = () => {
  const [restaurantList, setRestaurantList] = useState({ businesses: [] });
  const [search, setSearch] = useState("restaurants");
  const [favorite, setFavorite] = useState(false)
  const [ isLoading, setisLoading] = useState(false)

  const fetchingData = async () => {
    setisLoading(true)
    const url = `http://localhost:3001/restaurants?searchTerm=${search}&location=helsinki`;
    const response = await axios.get(url);
    // console.log("url is ", url);
    // console.log("response is ", response.data);
    response.data.businesses.forEach( res => Object.assign(res,{favorite: false}))
    setRestaurantList(response.data);
    setisLoading(false)
  };

  useEffect(() => {
    // get data from localStorage
    let restaurantData = localStorage.getItem('restaurantList')
    // convert it from JSON file
    restaurantData = JSON.parse(restaurantData)
    console.log('data from localstorage',restaurantData)

    if(restaurantData !== null){
      setRestaurantList({ businesses: [...restaurantData]})
    }else{
      fetchingData();
    }
  }, [search]);


  // filter out the items its favorite is true
  const favoriteList = restaurantList.businesses.filter( restaurant => restaurant.favorite === true)

  const handleClick = () => {
    let sortedRestaurants = restaurantList.businesses.sort((a, b) => {
      return b.rating - a.rating;
    });
    setRestaurantList({businesses:[...sortedRestaurants]});
    console.log("result is ", sortedRestaurants);
  };


  const searchRestaurants = (e) => {
    e.preventDefault();
    console.log("button clicked");

    const newSearch = document.getElementById("addSearch");
    if (newSearch.value !== "") {
      console.log("data from newSearch is ", newSearch.value);
      setSearch(newSearch.value);
    }
  };

  // console.log(restaurantList)
  // console.log(favorite)

  return (
    <div className="Main-container">
      <Navbar searchRestaurants={searchRestaurants} setFavorite={setFavorite} />

      {/* try to use the spinner when data takes time to load */}
      {isLoading && <div className="loader">Loading...</div>}

      {restaurantList && 
      <DisplayRestaurant 
        // send favoriteList as a props to this component when the favorite state is true
        restaurantList={favorite ? favoriteList : restaurantList.businesses} 
      />}
    </div>
  );
};

export default App;