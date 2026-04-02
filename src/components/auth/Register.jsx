"use client";
import Image from "next/image";
import React from "react";
import registerLogo from "../../assets/registerImage.png";
import Navbar from "../shared/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.email.value;
    const userInfo = {
      name: name,
      email: email,
      password: password,
      role: "user",
      createAt: new Date(),
    };
  };
  return (
    <div className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-50 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center p-4 md:p-10">
        <div className="card lg:card-side bg-base-100 shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-w-6xl w-full overflow-hidden rounded-[2.5rem] border border-white/40">
          {/* Left Side: Illustration */}
          <div className="hidden lg:flex lg:w-1/2 bg-[#0F172A] items-center justify-center p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -ml-20 -mb-20"></div>

            <div className="text-center z-10">
              <Image
                src={registerLogo}
                alt="Register Illustration"
                className="w-96 mx-auto mb-10 drop-shadow-2xl transform hover:scale-105 transition duration-500"
                priority
              />
              <h2 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
                Join the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Future
                </span>
              </h2>
              <p className="mt-6 text-slate-400 text-lg font-light max-w-xs mx-auto">
                Secure your spot in the next generation of digital innovation.
              </p>
            </div>
          </div>

          {/* Right Side: Professional Form */}
          <div className="card-body lg:w-1/2 p-8 md:p-16">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-4xl font-black text-slate-800 mb-3">Create Account</h1>
              <p className="text-slate-500 font-medium italic">
                Start your 14-day free trial today.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Name Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-700">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rakibul Hasan"
                  className="input input-bordered w-full bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl h-14"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-700">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="input input-bordered w-full bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl h-14"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-700">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-slate-50 border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl h-14"
                  required
                />
              </div>

              {/* submit button */}
              <input className="btn w-full" type="submit" value="Register Now" />
            </form>

            <div className="divider text-slate-400 text-[10px] font-bold uppercase tracking-[4px] my-8">
              Fast Connect
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <button className="btn btn-outline flex-1 border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-2xl h-14 shadow-sm capitalize font-bold">
                Google
              </button>
              <button className="btn btn-outline flex-1 border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-2xl h-14 shadow-sm capitalize font-bold">
                Github
              </button>
            </div>

            <p className="text-center mt-10 text-slate-500 font-medium">
              Already a member?{" "}
              <a
                href="/login"
                className="text-primary font-bold hover:text-secondary transition-colors underline underline-offset-4"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
