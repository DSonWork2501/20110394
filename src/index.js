import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
// Page
import Covid from './component/Pages/Covid';
import News from './component/Pages/News';
import Todo from './component/Pages/Todo';
import Secrect from './component/Pages/Secrect'
import NotFoundPage from './component/Pages/NotFoundPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/timer' element={<News />} />
          <Route path='/todolist' element={<Todo />} />
          <Route path='/secrect' element={<Secrect />} />
          <Route path='/404' element={<NotFoundPage />}></Route>
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route index element={<Covid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
