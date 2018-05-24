import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main'

if (document.getElementById('root')) {
    ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>, document.getElementById('root'));
}