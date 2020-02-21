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
  newFilenames: [],
  zippedFile: false,
};

const userReducer = (state = initialState, action) => {
  let images;
  let tabbedImages;
  let zippedFile;

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
      return {
            ...state,
            zippedFile: true,
          }
    //   fetch('/images', {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     body: action.payload,
       
    //   })
    //   .then((res)=> {
    //       console.log('inside post then', res)
    //     }).then(() => {
    //       zippedFile = true;
    //       console.log('does this run')
    //   return {
    //     ...state,
    //     tabbedImages,
    //     zippedFile,
    //   }
    // })
    default:
      return state;
  }
};

export default userReducer;
