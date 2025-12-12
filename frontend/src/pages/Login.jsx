import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { backendUrl } from "../config";

const Login = () => {
  const { navigate, token, setToken } = useContext(ShopContext);

  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const url =
        mode === "login"
          ? `${backendUrl}/api/user/login`
          : `${backendUrl}/api/user/register`;

      const payload =
        mode === "login"
          ? {
              email: formData.email,
              password: formData.password,
            }
          : formData;

      const res = await axios.post(url, payload);

      if (res.data.success) {
        toast.success(
          res.data.message ||
            (mode === "login" ? "Logged in successfully" : "Account created")
        );
        if (res.data.token) {
          setToken(res.data.token);
        }
        navigate("/");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || err.message || "Request failed"
      );
    }
  };

  return (
    <div className="w-full flex justify-center mt-24 mb-24 px-4">
      <div className="w-full max-w-xl flex flex-col items-center">
        {/* Big heading / hero text */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-3">
          {mode === "login" ? "Welcome back" : "Join the Shoppiyo community"}
        </h1>

        <p className="text-center text-sm sm:text-base text-gray-500 mb-8 max-w-lg">
          {mode === "login"
            ? "Log in to continue shopping, track your orders, and access saved favourites."
            : "Create an account to save your favourites, track orders, and get early access to new drops."}
        </p>

        {/* Form – full width, no card box */}
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={onSubmitHandler}
        >
          {mode === "signup" && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={onChangeHandler}
                placeholder="Enter your name"
                className="px-4 py-2.5 border rounded-md text-sm"
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={onChangeHandler}
              placeholder="you@example.com"
              className="px-4 py-2.5 border rounded-md text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={onChangeHandler}
              placeholder="••••••••"
              className="px-4 py-2.5 border rounded-md text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-3 w-full py-3 bg-[#111111] hover:bg-[#ff8a00] text-white rounded-full text-sm sm:text-base font-medium tracking-wide transition-colors"
          >
            {mode === "login" ? "Log in" : "Create account"}
          </button>
        </form>

        {/* Mode toggle */}
        <div className="mt-4 text-center text-sm">
          {mode === "login" ? (
            <>
              <span className="text-gray-500">New to Shoppiyo? </span>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-[#ff8a00] font-medium"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-500">Already have an account? </span>
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-[#ff8a00] font-medium"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
