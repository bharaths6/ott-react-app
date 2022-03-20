import { combineReducers } from 'redux';

import contentList from './InfoReducers';

const rootReducer = combineReducers({
  contentList,
});

export default rootReducer;