/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import DisplayRestaurant from "./components/DisplayRestaurant";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  const [restaurantList, setRestaurantList] = useState({ businesses: [] });
  const [search, setSearch] = useState("restaurants");
  const fetchingData = async () => {
    const url = `https://famua0f1ql.execute-api.eu-central-1.amazonaws.com/dev/restaurants?searchTerm=${search}&location=helsinki`;
    const response = await axios.get(url);
    console.log("url is ", url);
    console.log("response is ", response.data);
    // response.data.businesses.forEach( res => Object.assign(res,{favarite: false}))
    setRestaurantList(response.data);
  };

  useEffect(() => {
    fetchingData();
  }, [search]);

  let sortedRestaurants = null;

  const handleClick = () => {
    sortedRestaurants = restaurantList.businesses.sort((a, b) => {
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

  return (
    <div className="Main-container">
      <Navbar searchRestaurants={searchRestaurants} />
      {restaurantList && <DisplayRestaurant restaurantList={restaurantList} />}
    </div>
  );
};

export default App;