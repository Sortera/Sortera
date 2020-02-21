import * as types from '../constants/actionTypes';
import ReduxThunk from 'redux-thunk';

export const addImage = files => ({
  type: types.ADD_IMAGE,
  payload: files
});

// export const addTabbedImages = (formData) => ({
//   type: types.ADD_TABBED_IMAGES,
//   payload: formData
// })
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
      console.log('in thunk success')
    dispatch(addTabbedImages())
  })
  .catch(err => {console.log(err)})
  };
}
// function makeASandwichWithSecretSauce(forPerson) {
//   // We can invert control here by returning a function - the "thunk".
//   // When this function is passed to `dispatch`, the thunk middleware will intercept it,
//   // and call it with `dispatch` and `getState` as arguments.
//   // This gives the thunk function the ability to run some logic, and still interact with the store.
//   return function(dispatch) {
//     return fetchSecretSauce().then(
//       (sauce) => dispatch(makeASandwich(forPerson, sauce)),
//       (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
//     );
//   };
// }
// function fetchSecretSauce() {
//   return fetch('https://www.google.com/search?q=secret+sauce');
// }