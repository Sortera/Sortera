import * as types from '../constants/actionTypes';

export const addImage = files => ({
  type: types.ADD_IMAGE,
  payload: files
});

export const addTabbedImages = (files, urls) => ({
  type: types.ADD_TABBED_IMAGES,
  payload: [files, urls]
})