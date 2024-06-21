// src/Register.js
import React from 'react';
import './style/Register.css';

export default function Register() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form className="form-signup">
            <h1 className="h3 mb-3 font-weight-normal text-center">
              إنشاء حساب جديد
            </h1>
            <img
              src="flag).png"
              alt="Profile Image"
              className="profile-image"
            />

            <div className="form-group">
              <label htmlFor="fullName" className="sr-only">
                الاسم الكامل
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="form-control"
                required
                autoFocus
                placeholder="الاسم الكامل"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                عنوان البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
                placeholder="عنوان البريد الإلكتروني"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="sr-only">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
                placeholder="كلمة المرور"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="sr-only">
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                required
                placeholder="تأكيد كلمة المرور"
              />
            </div>

            <button
              className="btn btn-lg btn-primary btn-block btn-custom"
              type="submit"
            >
              إنشاء حساب
            </button>
            <div className="text-center mt-3">
              <a href="/login" className="login-link">
                تسجيل الدخول
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
