export const GET_ALBUM = 'album/LOAD';
export const GET_ALBUM_SUCCESS = 'album/LOAD_SUCCESS';
export const GET_ALBUM_FAIL = 'album/LOAD_FAIL';


const initialState = {
  albums: [],
  loading: false,
  error: null,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM:
      return { ...state, loading: true };
    case GET_ALBUM_SUCCESS:
      return { ...state, loading: false, albums: action.payload.data };
    case GET_ALBUM_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching albums',
      };
    default:
      return state;
  }
}

export function listRepos() {
  return {
    type: GET_ALBUM,
    payload: {
      request: {
        url: 'photos/',
      },
    },
  };
}

export function listThumb(albumId) {
  return {
    type: GET_ALBUM,
    payload: {
      request: {
        url: `photos?albumId=${albumId}`,
      },
    },
  };
}
