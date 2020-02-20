import { combineReducers } from 'redux';
import userReducer from './userReducer';

const reducers = combineReducers({
    users: userReducer,
});

export default reducers;

// const initialState = {};
// const mainReducer = (action) => {
//     return initialState;
// }
// module.exports = mainReducer;