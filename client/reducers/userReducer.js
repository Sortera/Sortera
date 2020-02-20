import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  email: '',
  subscriberStatus: false,
  sessionId: null,
  downloads: 0,
  images: [],
  originalFilenames: [],
  generatedTags: [],
  newFilenames: []
};

const userReducer = (state = initialState, action) => {
  let images;

  switch (action.type) {
    case types.ADD_IMAGE:
      images = [...action.payload];

      return {
        ...state,
        images
      };

    default:
      return state;
  }
};

export default userReducer;
