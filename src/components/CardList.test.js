import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('renders CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(< CardList robots={mockRobots} />)).toMatchSnapshot();
})
