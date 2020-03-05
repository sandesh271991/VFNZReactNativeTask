import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import __ErrorAlert from '../common/ErrorAlertComponent/errorAlert';

configure({ adapter: new Adapter() });

describe('ErrorAlert', () => {
  it('should render ErrorAlert component', () => {
    const wrapper = shallow(<__ErrorAlert />);
  });

  it('should render initial layout', () => {
    // when
    const component = shallow(<__ErrorAlert />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
