import React, { Fragment } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Food( { name, picture, rating }){
  return (
    <Fragment>
      <h1>I like {name} </h1>
      <h2> {rating} </h2>
      <img src ={picture} alt={name}></img>
    </Fragment>
  );
}

const foodILike = [{
    id: 1,
    name: 'CreamPasta',
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fthumb%2FR1280x0%2F%3Ffname%3Dhttp%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4OhC%2Fimage%2FlNNoSaDd8uIQ6xTe_7txil9OR5E.jpg&f=1&nofb=1",
    rating: 5,
  }, 
  {
    id: 2,
    name: 'TomatoPasta',
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0%2F%3Ffname%3Dhttps%3A%252F%252Ft1.daumcdn.net%252Fliveboard%252Fdailylife%252F8defeeef58a04d3888ddfe03b5722000.jpg&f=1&nofb=1",
    rating: 10,
  }
];

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

constructor(props)

function App() {
  //return <div className = "App" />;
  return (
    <div>
      <div>heello</div>
      {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
    </div>
  );

}

export default App;
