// tslint:disable:ordered-imports
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'styles/styles.scss';
// tslint:enable:ordered-imports

const target = document.querySelector('#root');
ReactDOM.render(<App/>, target);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
    });
}