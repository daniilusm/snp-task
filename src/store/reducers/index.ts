import { combineReducers } from 'redux';
import { users } from './usersReducer';

export const rootReducer = combineReducers({
  users,
});
