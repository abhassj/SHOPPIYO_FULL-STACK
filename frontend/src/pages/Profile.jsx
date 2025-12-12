import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Profile = () => {
  const { token, navigate, logout } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch user profile
    const loadProfile = async () => {
      try {
        const res = await axios.get("http://https://shoppiyo-full-stack-backend-jg43.onrender.com/api/user/profile", {
          headers: { token: token }
        });

        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadProfile();
  }, [token, navigate]);

  return (
    <div className="border-t pt-16 min-h-[80vh] flex justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-8 md:p-10 flex flex-col gap-8">

        {/* Header / Intro */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-2xl mb-2">
              <Title text1="MY" text2="ACCOUNT" />
            </div>

            {/* ⭐ NEW — username displayed */}
            {user && (
              <h2 className="text-lg font-semibold text-gray-800 mt-1">
                Welcome, {user.name}
              </h2>
            )}

            <p className="text-gray-700 text-sm md:text-base max-w-xl mt-1">
              This is your little corner of Shoppiyo. From here you can check your
              previous orders and sign out when you’re done browsing.
            </p>
          </div>

          {/* Right-side small card */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 bg-gray-50 rounded-xl px-6 py-4">
            <span className="text-4xl">🛍️</span>
            <p className="text-xs text-gray-500 text-center">
              Curated finds, ready to ship.
            </p>
          </div>
        </div>

        {/* Info + Buttons */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 text-sm text-gray-600">
            <div className="border rounded-xl p-4 bg-gray-50">
              <h2 className="font-semibold text-gray-800 mb-1 text-sm">
                Order overview
              </h2>
              <p>
                See everything you’ve purchased, what’s on the way, and quickly
                revisit items you loved.
              </p>
            </div>

            <div className="border rounded-xl p-4 bg-gray-50">
              <h2 className="font-semibold text-gray-800 mb-1 text-sm">
                Secure & simple
              </h2>
              <p>
                You're signed in securely. When you're done, just log out with
                one tap to keep things tidy.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:justify-center">
            <button
              onClick={() => navigate("/orders")}
              className="w-full py-3 border border-black rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
            >
              View My Orders
            </button>

            <button
              onClick={logout}
              className="w-full py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#ff8a00] transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
