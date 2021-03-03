import {Link} from 'gatsby';
import React from 'react';

function SinglePizza({pizzas}) {
  return (
    <div>
      <Link to={`/pizzas/${pizzas.slug.current}`}>
        <h2>
          <span className="mark">{pizzas.name}</span>
        </h2>
        <p>{pizzas.toppings.map(topping => topping.name).join(', ')}</p>
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
