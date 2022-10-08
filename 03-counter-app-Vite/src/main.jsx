import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirtsApp } from './FirstApp';
import { HelloWordApp} from './HelloWordApp';
import './style.css';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWordApp/>
        <CounterApp value = {123}/>
    </React.StrictMode>
);