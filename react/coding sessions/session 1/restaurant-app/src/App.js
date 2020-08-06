import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import DisplayRestaurant from "./displayRestaurant";
const App = () => {
  const [restaurantList, setRestaurantList] = useState({ businesses: [] });
  const [search, setSearch] = useState("restaurants");
  const fetchingData = async () => {
    const url = `https://famua0f1ql.execute-api.eu-central-1.amazonaws.com/dev/restaurants?searchTerm=${search}&location=helsinki`;
    const response = await axios.get(url);
    console.log("url is ", url);
    console.log("response is ", response.data);
    setRestaurantList(response.data);
  };

  useEffect(() => {
    fetchingData();
  }, [search]);

  let sortedRestaurants = "";

  const handleClick = () => {
    sortedRestaurants = restaurantList.businesses.sort((a, b) => {
      return b.rating - a.rating;
    });
    setRestaurantList([...sortedRestaurants]);
    console.log("result is ", sortedRestaurants);
  };

  const searchRestaurants = (e) => {
    e.preventDefault();
    console.log("button clicked");

    const newSearch = document.getElementById("addSearch");
    if (newSearch.value != "") {
      console.log("data from newSearch is ", newSearch.value);
      setSearch(newSearch.value);
    }
  };

  return (
    <div className="Main-container">
      <h1>List of restaurants</h1>
      <button onClick={() => handleClick()}>Sort by stars</button>
      <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addSearch"
          placeholder="Search Something..."
        />
        <button onClick={searchRestaurants}>Search</button>
      </form>
      {restaurantList && <DisplayRestaurant restaurantList={restaurantList} />}
    </div>
  );
};

export default App;
