// src/Dashboard.js

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './style/Dashboard.css';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="App">
      <Sidebar />
      <header className="header">
        <Header />
      </header>
      <div className="dashboard-content">
          <div className="dashboard-card">
            <h3>الممتلكات المسجلة</h3>
            <p>عدد الممتلكات المسجلة: 50</p>
          </div>
          <div className="dashboard-card">
            <h3>التدخلات المخططة</h3>
            <p>عدد التدخلات المخططة: 20</p>
          </div>
          <div className="dashboard-card">
            <h3>الموارد المتاحة</h3>
            <p>عدد الموارد المتاحة: 15</p>
          </div>
          <div className="dashboard-card">
            <h3>الاقتراحات المقدمة</h3>
            <p>عدد الاقتراحات المقدمة: 10</p>
          </div>
          </div>
    </div>
  );
}
