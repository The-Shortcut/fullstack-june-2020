/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from "react";


const DisplayRestaurant = (props) => {
  const [fav, setFav] = useState(false)
  // console.log('restaurants from display component ', props.restaurantList.businesses)
  const toggleFav = (restaurant) => {
    const targetRestaurant = props.restaurantList.find(res => res.id === restaurant.id)
    console.log(targetRestaurant)
    if(targetRestaurant.id === restaurant.id){
      setFav(!fav)
    }
    if(!restaurant.favorite){
      restaurant.favorite = true
    }else{
      restaurant.favorite = false
    }
    localStorage.setItem('restaurantList', JSON.stringify(props.restaurantList))
  }
  
  return (
    <div className="restaurants">
      {props.restaurantList.map((restaurant, key) => {
        return (
          <div key={key} className="cards">
            <div onClick={() => toggleFav(restaurant)}>
            {(restaurant.favorite) ?
            <i className="fas fa-heart"></i>
            :
            <i className="far fa-heart"></i>
            }
            </div>
            
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