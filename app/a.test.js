import React from 'react';
import {mount, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


import {Entry} from './a';

it('handles Entry', () => {
  const wrapper = mount(<Entry/>);

  expect(toJson(wrapper)).toMatchSnapshot();
});
