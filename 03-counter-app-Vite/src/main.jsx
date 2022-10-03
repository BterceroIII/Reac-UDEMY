import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirstApp';
import { HelloWordApp} from './HelloWordApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWordApp/>
        <FirtsApp></FirtsApp>
    </React.StrictMode>
);