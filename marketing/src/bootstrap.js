import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (el) => {
    ReactDOM.render(<h1><App /></h1>, el);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_market_dev_root');

    if (devRoot) {
        mount(devRoot);
    }
};

export { mount };