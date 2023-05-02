import React, { Component } from 'react'
import Navbar from './components/NavBar.js'
import News from './components/News.js'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pagesize= 5;
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pagesize}  apiKey={this.apiKey} country="in" category="general"/>} />
          <Route exact path="/Business" element={<News key="Business"pageSize={this.pagesize} apiKey={this.apiKey} country="in" category="Business"/>} />
          <Route exact path="/Entertainment" element={<News key="Entertainment"pageSize={this.pagesize} apiKey={this.apiKey} country="in" category="Entertainment"/>} />   
          <Route exact path="/Health" element={<News key="Health"pageSize={this.pagesize} apiKey={this.apiKey} country="in" category="Health"/>} />
          <Route exact path="/Science" element={<News key="Science"pageSize={this.pagesize} apiKey={this.apiKey} country="in" category="Science"/>} />
          <Route exact path="/Sports" element={<News key="Sports"pageSize={this.pagesize} apiKey={this.apiKey} country="in" category="Sports"/>} />
          <Route exact path="/Technology" element={<News key="Technology"pageSize={this.pagesize} apiKey={this.apiKey} country="in" category="Technology"/>} />
        </Routes>
      </div>
    </Router>
    )
  }
}



