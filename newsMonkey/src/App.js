import React, { useState } from 'react'
import Navbar from './components/NavBar.js'
import News from './components/News.js'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =() => {
  const pagesize= 5;
  const apiKey = process.env.REACT_APP_NEWS_API


  const [progress, setProgress] = useState(0)
  //Setting Mode 
  const [mode,setMode]= useState('light');
  // ToggleMode
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#333638';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }


  
return (
    <Router>
    <div>
      <Navbar mode = {mode} toggleMode = {toggleMode}/>
      <LoadingBar 
      height = {3}
      color = '#f11946'
      progress = {progress}
      />
      <Routes>
        <Route exact path="/" element={<News mode = {mode} setProgress={setProgress} key="general" pageSize={pagesize}  apiKey={apiKey} country="in" category="general"/>} />
        <Route exact path="/Business" element={<News mode = {mode} setProgress={setProgress} key="Business"pageSize={pagesize} apiKey={apiKey} country="in" category="Business"/>} />
        <Route exact path="/Entertainment" element={<News mode = {mode} setProgress={setProgress} key="Entertainment"pageSize={pagesize} apiKey={apiKey} country="in" category="Entertainment"/>} />   
        <Route exact path="/Health" element={<News mode = {mode} setProgress={setProgress} key="Health"pageSize={pagesize} apiKey={apiKey} country="in" category="Health"/>} />
        <Route exact path="/Science" element={<News mode = {mode} setProgress={setProgress} key="Science"pageSize={pagesize} apiKey={apiKey} country="in" category="Science"/>} />
        <Route exact path="/Sports" element={<News mode = {mode} setProgress={setProgress} key="Sports"pageSize={pagesize} apiKey={apiKey} country="in" category="Sports"/>} />
        <Route exact path="/Technology" element={<News mode = {mode} setProgress={setProgress} key="Technology"pageSize={pagesize} apiKey={apiKey} country="in" category="Technology"/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;



