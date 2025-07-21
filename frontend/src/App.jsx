import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Pages/Dashboard';
import Candidate from './Pages/candidate'
import Internship from './Pages/internship';
import Profile from './Pages/profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />
        }
      />

      <Route
        path="/"
        element={
          isAuthenticated ? <MainLayout /> : <Navigate to="/login" />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/internship" element={<Internship />} />
         <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
    </Routes>
  );
};

export default App;
