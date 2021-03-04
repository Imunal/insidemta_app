import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/style.css';
import './Assets/Css/shopStyle.css';
import './Assets/Css/exchangeStyle.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './Store';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastProvider autoDismiss>
                <App />
            </ToastProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
