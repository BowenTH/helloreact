import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {Hello,App} from './App';
// import imgJson from 'data/img.json';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Hello/><App/>
	</div>, document.getElementById('root'));
registerServiceWorker();
