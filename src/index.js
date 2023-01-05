import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Assignment2 from './assignment2/assignment2';
import Counter from './counter/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

const HomePage = ()=>
  <div>
    <h1>Home Page</h1>
    <div><a href='/Counter'>Go to Counter Assignment</a></div>
  </div>


root.render(
  <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='assignment2' element={<Assignment2 />} />
            <Route path='counter' element={<Counter />} />
        </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <Counter />
  //   <Assignment2 />
    
  // </React.StrictMode>
);

reportWebVitals();
