import * as types from '../constants/actionTypes';
import ReduxThunk from 'redux-thunk';

export const addImage = files => ({
  type: types.ADD_IMAGE,
  payload: files
});


export const addTabbedImages = () => ({
  type: types.ADD_TABBED_IMAGES,
})

export const addTabbedImagesAsync= (formData) => {
  return dispatch => {
    fetch('/images', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: formData,
     
    })
    .then(() => {
    dispatch(addTabbedImages())
  })
  .catch(err => {console.log(err)})
  };
}

