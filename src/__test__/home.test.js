import React, { Component } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { shallow } from 'enzyme';
import expect from 'expect';


import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import __Home from '../component/HomeComponent/home';

const mockStore = configureMockStore();
const store = mockStore({});

const findById = function (tree, testID) {
  if (tree.props && tree.props.testID === testID) {
    return tree;
  }
  if (tree.children && tree.children.length > 0) {
    const childs = tree.children;
    for (let i = 0; i < childs.length; i++) {
      const item = findById(childs[i], testID);
      if (typeof (item) !== 'undefined') {
        return item;
      }
    }
  }
};

describe('Testpage Component', () => {

  it('should check if text exists', () => {
    const wrapper = shallow(<Provider store={store}>
        <__Home />
    </Provider>);
    wrapper.findWhere((n) => n.name() === 'Button' && n.prop('testID') === 'HomeButton');
  });

  it("renders without crashing", () => {
    const rendered = renderer
      .create(<Provider store={store}>
        <__Home />
    </Provider>)
      .toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
  
});
