import './assets/styles/custom.scss';
import './App.css';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';
import NavBar from 'components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <h1>Hello</h1>
    </>
  );
}

export default App;
