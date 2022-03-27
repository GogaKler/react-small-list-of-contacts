import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'
import App from './App';
import { GlobalStyles } from './componentsStyled/Global';
import './assets/fonts/fonts.scss'
import './components/Preloader/Preloader.scss'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root')
);

