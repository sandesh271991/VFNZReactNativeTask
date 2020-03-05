import React, { Component } from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import expect from 'expect';

import renderer from 'react-test-renderer';

import __AlbumDetailsView from '../component/AlbumDetailsComponent/albumDetailsView';

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


describe('Album Details Screen', () => {
  it('should render Album Details component', () => {
    const wrapper = shallow(
        <__AlbumDetailsView navigation={{ getParam: jest.fn() }} />,
    );
  });

  it('should render initial layout', () => {
  // when
    const component = shallow(<__AlbumDetailsView navigation={{ getParam: jest.fn() }} />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });

  it('should check if BackButton exists', () => {
    const wrapper = shallow(<__AlbumDetailsView navigation={{ getParam: jest.fn() }} />);
    wrapper.findWhere((n) => n.name() === 'Button' && n.prop('testID') === 'HomeButton');
  });

  it('should check if text exists', () => {
    const tree = renderer.create(<__AlbumDetailsView navigation={{ getParam: jest.fn() }} />).toJSON();
    expect(findById(tree, 'albumText')).toBeDefined();
  });

  it('test onPress functionality', () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue('Link on press invoked');
    const wrapper = shallow(<__AlbumDetailsView navigation={{ getParam: jest.fn() }} onPress={ onPressEvent } text='Home'/>);
    wrapper.findWhere((n) => n.name() === 'Button' && n.prop('testID') === 'HomeButton');
    expect(onPressEvent.mock.calls.length).toBe(0);
});
});
