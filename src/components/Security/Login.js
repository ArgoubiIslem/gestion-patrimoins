import React from 'react';
import './style/Login.css';
export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center">
              تسجيل الدخول
            </h1>
            <img
              src="flag).png"
              alt="Profile Image"
              className="profile-image"
            />

            <div className="form-group">
              <label htmlFor="username" className="sr-only">
                عنوان البريد الإلكتروني
              </label>
              <input
                type="email"
                name="username"
                id="username"
                className="form-control"
                autoComplete="email"
                required
                autoFocus
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
                autoComplete="current-password"
                required
                placeholder="كلمة المرور"
              />
            </div>

            <button
              className="btn btn-lg btn-primary btn-block btn-custom"
              type="submit"
            >
              تسجيل الدخول
            </button>
            <div className="text-center mt-3">
              <a href="/register" className="login-link">
                إنشاء حساب جديد
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
