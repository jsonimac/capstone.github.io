import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import './App.css';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Home from './components/front-end/Home';
import Registration from './components/front-end/auth/Registration';
import Login from './components/front-end/auth/Login';


function App() {
  return (
    <Router>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/registration"  element={<Registration />} />
          <Route path="/login"  element={<Login />} />
          
          <Route path="/admin" element={<MasterLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>

      </Routes>
    </Router>
  );
}

export default App;
