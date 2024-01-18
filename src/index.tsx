import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import './app/styles/index.scss';
import {Provider} from "react-redux";
import {store} from "./app/store/store";

/*
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
*/

const container = document.getElementById('root');
if (!container) {
    throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт-приложение');
}
const root = createRoot(container);


root.render(
    <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>,
);

