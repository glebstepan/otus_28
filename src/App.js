import React from 'react';
import './App.css';
import FormWrapper from './components/RegistrationForm/FormWrapper';
import Header from './components/header';
import Menu from './components/menu' ;
import Content from './components/content';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
       <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
