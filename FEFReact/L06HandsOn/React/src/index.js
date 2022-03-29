import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import FavoriteThings from './screens/FavoriteThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// 1.
var filtered = car => {
  return car.name === 'ford';
};
const arr = [
  { name: 'chevy', count: 2 },
  { name: 'ford', count: 5 },
  { name: 'acura', count: 3 },
  { name: 'honda', count: 16 }
].filter(filtered);

//console.log("Filter results:", arr);

// 2.
const arr2 = ['Bill', 'Joe', 'Emily', 'Andrea'];
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const fullArray = [...arr, ...newStudents];

console.log(fullArray);