import React from 'react';
import { Link } from 'react-router-dom';
import './style/Dashboard.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {' '}
      <h2>القائمة الجانبية</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">لوحة القيادة</Link>
          </li>
          <li>
            <Link to="/profile">الملف الشخصي</Link>
          </li>
          <li>
            <Link to="/settings">الإعدادات</Link>
          </li>
          <li>
            <Link to="/logout">تسجيل الخروج</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
