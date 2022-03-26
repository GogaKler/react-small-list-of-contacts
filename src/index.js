import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'
import App from './App';
import './scss/globalStyles.scss'
import { GlobalStyles } from './componentsStyled/Global';



ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root')
);

