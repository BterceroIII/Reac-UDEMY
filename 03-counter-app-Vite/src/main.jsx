import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirstApp';
import { HelloWordApp} from './HelloWordApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWordApp/>
        <FirtsApp title="Hola, soy goku"/>
    </React.StrictMode>
);