import React, { Component } from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Provider } from 'react-redux';
import __Thumbnail from '../component/ThumbnailComponent/thumbnailView';

describe('Thumbnail Screen', () => {
  it('should render Thumbnail component', () => {
    const wrapper = shallow(
        <Provider store={store}>
        <__Thumbnail />
    </Provider>,
    );
  });


  it('should render initial layout', () => {
    // when
    const component = shallow(<Provider store={store}>
        <__Thumbnail />
    </Provider>);
      // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
