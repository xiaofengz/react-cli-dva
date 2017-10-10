import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composedCreateStore = compose(
	applyMiddleware(thunk)
)(createStore);

function configureStore(initialState = {}) {
	const store = composedCreateStore(reducers, initialState);
	return store;
}

export default configureStore;