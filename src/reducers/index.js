import { combineReducers } from 'redux';
import AfterRequestReducer from './after_request__reducer';

export default combineReducers({
	afterRequest: AfterRequestReducer,
})

