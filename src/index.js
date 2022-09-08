import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './component/GlobalStyles/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App></App>
        </GlobalStyles>
    </React.StrictMode>,
);
reportWebVitals();
