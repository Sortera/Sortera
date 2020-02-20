import * as types from '../constants/actionTypes';

export const addImage = files => ({
  type: types.ADD_IMAGE,
  payload: files,
});
