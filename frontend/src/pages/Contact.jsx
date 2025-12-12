import React, { useState } from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backendUrl}/api/contact`, formData);

      if (res.data.success) {
        toast.success("Your message has been sent!");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          comment: "",
        });
      } else {
        toast.error(res.data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"GET IN"} text2={"TOUCH"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 px-5 md:px-0">
        {/* Left Side: Contact Form */}
        <div className="flex flex-col gap-6 w-full md:max-w-[480px]">
          <p className="font-semibold text-xl text-gray-600">
            Send us a message
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-shippiyo-orange"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-shippiyo-orange"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-shippiyo-orange"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="comment"
              placeholder="Comment*"
              rows="6"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-shippiyo-orange"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-2 border border-black px-8 py-4 text-sm bg-black text-white hover:bg-shippiyo-orange hover:border-shippiyo-orange transition-all duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col justify-start items-start gap-4 p-6 bg-gray-100 rounded-lg w-full md:max-w-[380px]">
          <p className="font-semibold text-xl text-gray-600">Contact Info</p>
          <p className="text-gray-500 text-sm">
            If you have an issue or question that requires immediate
            assistance, you can contact us via the contact details below or
            email us. We will get back to you within 24 hours.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-gray-600 font-medium">PHONE:</p>
            <p className="text-gray-500">+91 95116 46006</p>
            <p className="text-gray-600 font-medium mt-2">EMAIL:</p>
            <p className="text-gray-500">support@shoppiyo.in</p>
            <p className="text-gray-600 font-medium mt-2">
              WORKING DAYS / HOURS:
            </p>
            <p className="text-gray-500">Mon - Sat / 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600 font-medium mt-2">GET IN TOUCH:</p>
            <p className="text-gray-500">
              We are committed to making your shopping experience seamless.
              Whether you have a question or a suggestion, we're always happy to
              hear from you.
            </p>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
