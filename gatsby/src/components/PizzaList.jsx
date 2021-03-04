import {Link} from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;
const PizzaStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SinglePizza({pizzas}) {
  return (
    <PizzaStyles>
      <Link to={`/pizzas/${pizzas.slug.current}`}>
        <h2>
          <span className="mark">{pizzas.name}</span>
        </h2>
      </Link>
      <p>{pizzas.toppings.map(topping => topping.name).join(', ')}</p>
      <Img fluid={pizzas.image.asset.fluid} alt={pizzas.name} />
    </PizzaStyles>
  );
}

export default function PizzaList({pizzas}) {
  return (
    <PizzaGridStyles>
      {pizzas.map(pizza => (
        <SinglePizza key={pizza.id} pizzas={pizza} />
      ))}
    </PizzaGridStyles>
  );
}
