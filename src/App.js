import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import RouterComponent from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
	render () {

		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}

export default App;