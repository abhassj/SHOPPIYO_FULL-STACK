import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { backendUrl } from "../config";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    cartItems,
    products,
    getCartAmount,
    delivery_fee,
    token,
    navigate,
    setCartItems,
  } = useContext(ShopContext);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  // helper to build items array from cart
  const buildOrderItems = () => {
    const items = [];

    for (const productId in cartItems) {
      const product = products.find((p) => p._id === productId);
      if (!product) continue;

      const sizesObj = cartItems[productId]; // { S: 1, M: 2, ... }
      for (const size in sizesObj) {
        const quantity = sizesObj[size];
        if (quantity > 0) {
          items.push({
            productId,
            name: product.name,
            image: product.image?.[0],
            price: product.price,
            quantity,
            size,
          });
        }
      }
    }

    return items;
  };

  const placeCodOrder = async (items, amount) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/place`,
        {
          items,
          amount,
          address,
          paymentMethod: "cod",
        },
        { headers: { token } }
      );

      if (res.data.success) {
        toast.success("Order placed successfully!");
        setCartItems({});
        navigate("/orders");
      } else {
        toast.error(res.data.message || "Failed to place order");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message || "Order failed");
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async () => {
    if (!token) {
      toast.info("Please log in to place an order");
      navigate("/login");
      return;
    }

    const items = buildOrderItems();
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const amount = getCartAmount() + delivery_fee;

    // CASH ON DELIVERY
    if (method === "cod") {
      await placeCodOrder(items, amount);
      return;
    }

    // RAZORPAY ONLINE PAYMENT
    if (method === "razorpay") {
      const ok = await loadRazorpayScript();
      if (!ok) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      try {
        // 1) create order on backend
        const orderRes = await axios.post(
          `${backendUrl}/api/payment/razorpay/order`,
          { amount }, // in rupees, backend converts to paisa
          { headers: { token } }
        );

        if (!orderRes.data.success) {
          toast.error(
            orderRes.data.message || "Failed to create payment order"
          );
          return;
        }

        const { order, key } = orderRes.data;

        // 2) open Razorpay checkout
        const options = {
          key,
          amount: order.amount, // already in paisa
          currency: order.currency,
          name: "Shoppiyo",
          description: "Order Payment",
          order_id: order.id,
          prefill: {
            name:
              `${address.firstName} ${address.lastName}`.trim() ||
              "Shoppiyo User",
            email: address.email || "test@example.com",
            contact: address.phone || "9999999999",
          },
          notes: {
            address: `${address.street}, ${address.city}, ${address.state} - ${address.zipcode}`,
          },
          theme: {
            color: "#000000",
          },
          handler: async function (response) {
            // This runs on successful payment
            try {
              const res = await axios.post(
                `${backendUrl}/api/order/place`,
                {
                  items,
                  amount,
                  address,
                  paymentMethod: "razorpay",
                  paymentInfo: {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  },
                },
                { headers: { token } }
              );

              if (res.data.success) {
                toast.success("Payment successful & order placed!");
                setCartItems({});
                navigate("/orders");
              } else {
                toast.error(res.data.message || "Failed to place order");
              }
            } catch (err) {
              console.error(err);
              toast.error("Payment succeeded but order failed to save");
            }
          },
          modal: {
            ondismiss: function () {
              toast.info("Payment popup closed");
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong with payment");
      }

      return;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* LEFT: Address form */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            name="firstName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
            value={address.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
            value={address.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          name="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
          value={address.email}
          onChange={handleChange}
        />
        <input
          name="street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
          value={address.street}
          onChange={handleChange}
        />

        <div className="flex gap-3">
          <input
            name="city"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
          />
          <input
            name="state"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-3">
          <input
            name="zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Zipcode"
            value={address.zipcode}
            onChange={handleChange}
          />
          <input
            name="country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
            value={address.country}
            onChange={handleChange}
          />
        </div>

        <input
          name="phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Phone"
          value={address.phone}
          onChange={handleChange}
        />
      </div>

      {/* RIGHT: summary + payment */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* Only Razorpay + COD */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white px-16 py-3 text-sm "
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
