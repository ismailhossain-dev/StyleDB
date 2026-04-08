"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const RegisterForm = () => {
  const axiosSecure = useAxiosSecure();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFrom = async (data) => {
    console.log(data);
    setLoading(true);

    const userInfo = {
      ...data,
      role: "user",
      createdAt: new Date(),
    };

    try {
      const res = await axiosSecure.post("/api/user", userInfo);
      console.log("data insert database", res.data);
    } catch (error) {
      console.log("user data insert error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4 lg:p-8">
        <div className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] max-w-6xl w-full overflow-hidden rounded-[32px] flex flex-col lg:flex-row border border-slate-100">
          {/* Left Side */}
          <div className="hidden lg:flex lg:w-1/2 bg-[#0F172A] relative items-center justify-center p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-indigo-500 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-fuchsia-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 text-center">
              <Image
                width={400}
                height={400}
                src="/assets/registerImage.png"
                alt="Register"
                className="mx-auto mb-10 drop-shadow-2xl animate-pulse-slow"
                priority
              />
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Unlock Your <span className="text-indigo-400">Potential.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-sm mx-auto">
                Join 10k+ developers and start building something extraordinary today.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 p-8 md:p-14 lg:p-20 bg-white">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-500">Enter your details to get started</p>
            </div>

            <form onSubmit={handleSubmit(handleRegisterFrom)} className="space-y-5">
              {/* Name */}
              <div className="group space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <div className="relative flex items-center">
                  <FaUser className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500" />
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="group space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative flex items-center">
                  <FaEnvelope className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500" />
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="group space-y-2 flex flex-col">
                <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                <div className="relative flex items-center">
                  <FaLock className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      },
                    })}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-indigo-600"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>

                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-sm">
                    Password must include uppercase, number, special character and be at least 8
                    characters.
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Create Account"}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-400 uppercase">Or register with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3.5 border rounded-2xl hover:bg-slate-50">
                <FaGoogle className="text-red-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3.5 border rounded-2xl hover:bg-slate-50">
                <FaGithub className="text-slate-900" /> GitHub
              </button>
            </div>

            <p className="text-center mt-10 text-slate-600">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 font-bold hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
