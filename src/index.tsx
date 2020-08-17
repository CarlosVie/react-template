import React from 'react';
import history from "./utils/history";
import { ConnectedRouter } from 'connected-react-router';
import configureStore from "./utils/configureStore";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './App.css';
import { App } from './containers/App'

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
               {/* <nav className={ 'navApp' }>
                    <AppBar />
                </nav>*/}
                <App />
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
