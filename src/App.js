import './App.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import LeftSide from './MyComponent/LeftSide';
import Center from './MyComponent/Center';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import About from './MyComponent/About';
import JsonBeautifier from './MyComponent/JsonBeautifier';


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.color = 'dark'
    } else {
      setMode('light')
      document.body.style.color = 'light'
    }
  }
  return (
    <>

        <Header title="Varun's Blog" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/upper-case" element={<Center />}></Route>
        <Route path="/json-beautifier" element={<JsonBeautifier />}></Route>

      </Routes>     
      <Footer />

    </>

  );
}

export default App;
