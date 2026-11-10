import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../util/auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (login(username, password)) {
      navigate("/admin");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">H</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1E1E1E] uppercase">Quản trị</h1>
          <p className="text-gray-500 text-sm mt-2">Đăng nhập hệ thống quản lý</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên đăng nhập
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938V30a1 1 0 001 1h22a1 1 0 001-1v-7.891c1.767-1.914 2.997-4.705 2.997-7.691z"></path>
                </svg>
                Đang nhập...
              </span>
            ) : (
              "Đăng nhập"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Mặc định: admin / admin123
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
