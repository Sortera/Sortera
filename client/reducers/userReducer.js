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
  let tabbedImages

  switch (action.type) {
    case types.ADD_IMAGE:
      images = [...action.payload];

      return {
        ...state,
        images
      };

    case types.ADD_TABBED_IMAGES:
      // tabbedImages = [...action.payload]
      console.log('in reducer payload', action.payload)
      fetch('/images', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: action.payload,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
        })
        .then((res)=> console.log('inside post then', res))
        .catch(err => console.log(err));
      return {
        ...state,
        tabbedImages
      }
      
    default:
      return state;
  }
};

export default userReducer;
