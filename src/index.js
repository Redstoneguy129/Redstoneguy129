import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css'

import SiteNav from './components/layout/SiteNav'
import Footer from './components/layout/Footer'

import Home from './components/layout/Home'

ReactDOM.render(
  <React.StrictMode>
    <SiteNav/>
    <section id="home"><Home/></section>
    <section id="reviews"></section>
    <section id="portfolio"></section>
    <section id="contact"></section>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);