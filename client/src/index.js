import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Auth0ProviderWithHistory>
		<App />
	</Auth0ProviderWithHistory>,

	document.getElementById('root')
);
registerServiceWorker();
