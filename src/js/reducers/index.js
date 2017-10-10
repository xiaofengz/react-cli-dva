import {
	combineReducers
} from 'redux';

import dialog from "./dialog";

const reducers = {
	dialog,
};

export default combineReducers({
	...reducers
});