import * as types from '../constants/actionTypes';

export const addImage = files => ({
  type: types.ADD_IMAGE,
  payload: files
});

export const addTabbedImages = (formData, newUrls) => ({
  type: types.ADD_TABBED_IMAGES,
  payload: [formData, newUrls]
})