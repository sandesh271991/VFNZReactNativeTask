import React, { Component } from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import expect from 'expect';
import __Navigator from '../common/navigator';


describe('Album Details Screen', () => {
  it('should render initial layout', () => {
  // when
    const component = shallow(<__Navigator navigation={{ getParam: jest.fn() }} />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
