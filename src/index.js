import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
// Page
import NotFoundPage from './component/Pages/NotFoundPage';
import Blog from './component/Pages/Blog';
import SingleBlog from './component/Pages/SingleBlog';
import AddNewBlog from './component/Pages/AddNewBlog';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/addnewblog' element={<AddNewBlog />} />
          <Route path='/404' element={<NotFoundPage />}></Route>
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route index element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
