import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';

import { shallow } from 'enzyme';
const $ = require('jquery');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import 'jest-enzyme';

it('renders welcome message', () => {
  const wrapper = shallow(<About />);
  const header = <h1>About Movie Picks</h1>;
  expect(wrapper.contains(header)).toBe(true);
  expect(wrapper.contains(header)).toEqual(true);
  expect(wrapper).toContainReact(header); // with jest-enzyme
});

function sum(a, b) {
  return a + b;
}

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

it('checks the array is concatenated', () => {
  const numbers = [4,5]
  expect([1,2,3,...numbers].length).toEqual(5);
});