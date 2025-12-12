import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ContactMessages = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/contact/all`, {
        // header is optional now but fine to send
        headers: { token },
      });

      console.log("🔎 /api/contact/all response:", res.data);

      if (res.data.success) {
        setMessages(res.data.messages || []);
      } else {
        toast.error(res.data.message || "Failed to load messages");
      }
    } catch (err) {
      console.error("Error loading messages:", err);
      toast.error("Error loading messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      const res = await axios.delete(`${backendUrl}/api/contact/${id}`, {
        headers: { token },
      });

      if (res.data.success) {
        toast.success("Message deleted");
        setMessages((prev) => prev.filter((m) => m._id !== id));
      } else {
        toast.error(res.data.message || "Failed to delete message");
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      toast.error("Error deleting message");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [token]);

  const getInitials = (name = "") => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  };

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-sm text-gray-500">Loading messages…</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold tracking-wide">
            Contact Messages
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            View and manage messages sent from the contact page.
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
          Total: {messages.length}
        </span>
      </div>

      {/* Empty state */}
      {messages.length === 0 && (
        <p className="text-gray-500 text-sm">
          No messages yet. Once users submit the contact form, they’ll appear
          here.
        </p>
      )}

      {/* Messages grid */}
      <div className="flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex gap-4 p-4 sm:p-5">
              {/* Avatar / initials */}
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black text-white text-sm font-semibold">
                {getInitials(msg.name)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Top row: name + date + delete */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      {msg.name}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {msg.createdAt
                        ? new Date(msg.createdAt).toLocaleString()
                        : ""}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="self-start sm:self-auto inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-red-400 text-red-500 rounded-full hover:bg-red-50 transition"
                  >
                    <span>Delete</span>
                    <span>✕</span>
                  </button>
                </div>

                {/* Contact info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-xs text-gray-600 mb-3">
                  <p className="truncate">
                    <span className="font-semibold">Email:</span>{" "}
                    {msg.email}
                  </p>
                  <p className="mt-1 sm:mt-0">
                    <span className="font-semibold">Phone:</span>{" "}
                    {msg.phoneNumber}
                  </p>
                </div>

                {/* Message body */}
                <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-800 whitespace-pre-wrap">
                  {msg.comment}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMessages;
