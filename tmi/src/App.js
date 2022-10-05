import React from 'react';
import './App.css';
import Nav_ from './components/Nav';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import MemberSetting from './pages/MemberSetting';

function App() {
  return (
    <div className="App">
      <Nav_ />
      <Routes>
        <Route path="/" element={"Main page"}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/membersetting" element={<MemberSetting/>}/>
      </Routes>
    </div>
  );
}

export default App;