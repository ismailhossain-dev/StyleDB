"use client";

import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaEnvelope, FaLock } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { signIn } from "next-auth/react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const loginInfo = { email, password };
    // =========Nextauth signin work ==========a
    signIn("credentials", loginInfo);

    //=============
    setLoading(true);

    try {
      console.log("Logging in with:", { email, password });
      // Simulate API call
      setTimeout(() => {
        // alert("Welcome back! 👋");
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4 lg:p-8">
        <div className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] max-w-6xl w-full overflow-hidden rounded-[32px] flex flex-col lg:flex-row border border-slate-100">
          {/* Left Side - Visual Section (Consistent with Register) */}
          <div className="hidden lg:flex lg:w-1/2 bg-[#0F172A] relative items-center justify-center p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-indigo-500 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-fuchsia-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 text-center">
              <div>
                <IoMdLogIn size={300} className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:w-1/2 p-8 md:p-14 lg:p-20 bg-white">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Sign In</h1>
              <p className="text-slate-500">Please enter your credentials to log in</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div className="group space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative flex items-center">
                  <FaEnvelope className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-800 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="group space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <a
                    href="/forgot-password"
                    hidden
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <FaLock className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-800 placeholder:text-slate-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password link */}
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary rounded-md border-slate-300"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    Remember me
                  </span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-400 font-medium uppercase tracking-wider">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-semibold text-slate-700 group">
                <FaGoogle className="text-red-500 text-lg group-hover:scale-110 transition-transform" />{" "}
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-semibold text-slate-700 group">
                <FaGithub className="text-slate-900 text-lg group-hover:scale-110 transition-transform" />{" "}
                GitHub
              </button>
            </div>

            <p className="text-center mt-10 text-slate-600">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-indigo-600 font-bold hover:underline">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
