// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import StudentManagementPage from './pages/StudentManagementPage';
import ReportPage from './pages/ReportPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/students" component={StudentManagementPage} />
          <Route path="/report" component={ReportPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
