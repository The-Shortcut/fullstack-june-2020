import React from "react";


const DisplayRestaurant = (props) => {
  console.log('restaurants from display component ', props.restaurantList.businesses)
  return (
    <div className="container">
      {props.restaurantList.businesses.map((restaurant, key) => {
        return (
          <div key={key} className="restaurant">
          <a href={restaurant.url} target="blank">
            <img src={restaurant.image_url} />
            <p className="restaurantName"> {restaurant.name}</p>
            <p>
              {restaurant.rating} stars {restaurant.review_count} Review
            </p>
            <p>{restaurant.location.zip_code}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayRestaurant;
