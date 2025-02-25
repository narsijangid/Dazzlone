import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from './store/Context';
import { Firebase } from './firebase';
import './index.css';
import './Components/Header/Header.css';
import './Components/Menu/Menu.css';
import './Components/Category/Category.css';
import './Components/Login/Login.css';


ReactDOM.render(
    <FirebaseContext.Provider value={{ Firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
    , document.getElementById('root')
);
