// src/Dashboard.js

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './style/Dashboard.css';

export default function Dashboard() {
  return (
    <div className="App">
      <Sidebar />
      <header className="header">
        <Header />
      </header>
    </div>
  );
}
