import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error(response.data.message || "Failed to update status");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const formatDateTime = (dt) =>
    dt ? new Date(dt).toLocaleString() : "";

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold tracking-wide">
            Orders
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Manage all customer orders and update their status in real time.
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
          Total: {orders.length}
        </span>
      </div>

      {/* Empty state */}
      {orders.length === 0 && (
        <p className="text-gray-500 text-sm">
          No orders yet. Once customers place orders, they’ll appear here.
        </p>
      )}

      {/* Orders list */}
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col gap-4 p-4 sm:p-5">
              {/* Top row: icon + main meta + status selector */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/90">
                    <img
                      src={assets.parcel_icon}
                      alt="parcel"
                      className="w-5 h-5 invert"
                    />
                  </div>

                  {/* Basic info */}
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {formatDateTime(order.date)}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-600">
                      <span>
                        <span className="font-semibold">Items:</span>{" "}
                        {order.items.length}
                      </span>
                      <span>
                        <span className="font-semibold">Amount:</span>{" "}
                        {currency}
                        {order.amount}
                      </span>
                      <span>
                        <span className="font-semibold">Method:</span>{" "}
                        {order.paymentMethod}
                      </span>
                      <span>
                        <span className="font-semibold">Payment:</span>{" "}
                        {order.payment ? "Done" : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status selector */}
                <div className="sm:text-right">
                  <p className="text-xs text-gray-500 mb-1">Order status</p>
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-black/70"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>

              {/* Items list */}
              <div className="rounded-lg bg-gray-50 px-3 py-2 text-xs sm:text-sm text-gray-800">
                <p className="font-semibold mb-1">Items</p>
                <div className="space-y-0.5">
                  {order.items.map((item, idx) => (
                    <p key={idx}>
                      {item.name} &times; {item.quantity}{" "}
                      <span className="text-gray-500">
                        ({item.size})
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Shipping address */}
              <div className="rounded-lg bg-gray-50 px-3 py-2 text-xs sm:text-sm text-gray-800">
                <p className="font-semibold mb-1">Shipping address</p>
                <p>{order.address.street}</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country} - {order.address.zipcode}
                </p>
                <p className="mt-1 text-gray-700">
                  <span className="font-semibold">Phone:</span>{" "}
                  {order.address.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
