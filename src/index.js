import React from 'react';
import ReactDOM from 'react-dom/client';
// ---------------files-------------------------
import App from './App';
// ---------------Bootstrap-------------------------
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";
// import "bootstrap/js/dist/dropdown";
// ----------------------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
