import {Link} from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

function SinglePizza({pizzas}) {
  return (
    <div>
      <Link to={`/pizzas/${pizzas.slug.current}`}>
        <h2>
          <span className="mark">{pizzas.name}</span>
        </h2>
        <p>{pizzas.toppings.map(topping => topping.name).join(', ')}</p>
        <Img fluid={pizzas.image.asset.fluid} alt={pizzas.name} />
      </Link>
    </div>
  );
}

export default function PizzaList({pizzas}) {
  return (
    <div>
      {pizzas.map(pizza => (
        <SinglePizza key={pizza.id} pizzas={pizza} />
      ))}
    </div>
  );
}
