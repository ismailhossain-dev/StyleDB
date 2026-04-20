"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import axios from "axios";

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
    setLoading(true);

    try {
      //=====image work
      const profileImage = data.photo?.[0];

      // check image exists
      if (!profileImage) {
        alert("Please select an image");
        return;
      }

      // FormData coming form js
      const formData = new FormData();
      formData.append("image", profileImage);

      //send image imagebb
      const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.NEXT_PUBLIC_IMAGEBB_KEY}`;

      // ✅ FIX: use await
      const imgRes = await axios.post(image_API_URL, formData);
      const image = imgRes.data.data.url;
      console.log(imgRes.data.data.url);
      //==========

      //===== user info
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        image, // ✅ now working
        role: "user",
        createdAt: new Date(),
      };

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

              {/* Image Field & file upload */}
              <div className="flex flex-col gap-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Photo</label>
                <input type="file" {...register("photo")} className="file-input" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
