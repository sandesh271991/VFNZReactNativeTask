export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';


const initialState = {
  repos: [],
  loading: false,
  error: null
};


export default function reducer(state = initialState , action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      };
    default:
      return state;
  }
}

export function listRepos(photos) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `photos/`
      }
    }
  };
}

export function listThumb(albumId) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `photos?albumId=${albumId}`
      }
    }
  };
}