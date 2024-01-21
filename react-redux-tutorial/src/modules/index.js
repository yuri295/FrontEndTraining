import { CombineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = CombineReducers({
  counter,
  todos,
});

export default rootReducer;
