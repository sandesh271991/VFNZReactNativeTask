import expect from 'expect';
import reducer from '../reducer/reducer';

const initialState = {
  albums: [],
  loading: false,
  error: null,
};

/** Testing the state data in Reducer */
describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('is correct', () => {
    const action = { type: 'GET_ALBUM' };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});
