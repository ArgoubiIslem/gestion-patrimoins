import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/Dashboard.css';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token JWT du localStorage
    localStorage.removeItem('token');
    // Rediriger vers la page de connexion ou une autre page appropriée
    navigate('/login'); // Utilisez useNavigate ou l'approche de navigation que vous préférez
  };

  return (
    <div className="sidebar">
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
            <button onClick={handleLogout} className="logout-button">
              تسجيل الخروج
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
