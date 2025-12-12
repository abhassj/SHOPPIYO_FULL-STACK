import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { backendUrl } from "../config";
import { toast } from "react-toastify";

const Orders = () => {
  const { token, navigate, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Fetch user orders from backend
  const fetchOrders = async () => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        setOrders(res.data.orders || []);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* If no orders */}
      {orders.length === 0 && (
        <p className="text-gray-600 text-sm sm:text-base">
          You have no orders yet. Once you place an order, it will appear here so
          you can track its status.
        </p>
      )}

      {/* Orders list */}
      <div className="flex flex-col gap-4 mt-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Left side: image + details */}
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={order.items[0].image}
                alt=""
              />
              <div>
                <p className="sm:text-base font-medium">
                  {order.items[0].name}
                  {order.items.length > 1 &&
                    ` + ${order.items.length - 1} more`}
                </p>

                <div className="flex items-center gap-3 mt-2 text-base">
                  <p className="text-lg">{currency}{order.amount}</p>
                  <p className="text-gray-600">
                    Items: {order.items.length}
                  </p>
                </div>

                <p className="mt-2 text-sm">
                  Date:{" "}
                  <span className="text-gray-400">
                    {order.date
                      ? new Date(order.date).toDateString()
                      : "—"}
                  </span>
                </p>
              </div>
            </div>

            {/* Right side: status + button */}
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">
                  {order.status || "Processing"}
                </p>
              </div>

              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
