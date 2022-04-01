import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {UserStore} from "./store/UserStore";
import {DeviceStore} from "./store/DeviceStore";

export interface ContextInterface  {
    user: UserStore
    device: DeviceStore
}

export const Context = createContext<ContextInterface | null>(null)

const AppContext: ContextInterface = {
    user: new UserStore(),
    device: new DeviceStore()
};

ReactDOM.render(
    <Context.Provider value={AppContext}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById('root')
);
