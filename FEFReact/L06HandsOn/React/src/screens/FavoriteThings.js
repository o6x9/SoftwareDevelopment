import React from 'react';
import Things from './Things';
import {  Route, Link } from 'react-router-dom';

const FavoriteThings = ({match}) => (
  <div>
    <h2>Favorite Things</h2>
    <ul>
      <li>
        <Link to={`${match.url}/favoriteFood`}>Favorite Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/favoriteCar`}>Favorite Car</Link>
      </li>
      <li>
        <Link to={`${match.url}/favoriteMovie`}>Favorite Movie</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:thingsId`} component={Things} />
    <Route
      exact
      path={match.url}
      render={() => <h3>slumdog-millionair</h3>}
    />
  </div>
);

export default FavoriteThings;
