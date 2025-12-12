import React, { useEffect, useState } from "react";

const BlockedUsers = () => {
  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(() => {
    fetch("http://https://shoppiyo-full-stack-backend-jg43.onrender.com/api/blocked-users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlockedUsers(data.blockedUsers);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Blocked Users</h1>
      <p className="text-gray-600 mb-6">
        These users are temporarily locked due to failed login attempts.
      </p>

      {blockedUsers.length === 0 ? (
        <p className="text-gray-400">No blocked users found.</p>
      ) : (
        <div className="space-y-4">
          {blockedUsers.map((u) => (
            <div
              key={u._id}
              className="border p-4 rounded-lg shadow-sm bg-gray-50"
            >
              <p><strong>Name:</strong> {u.name}</p>
              <p><strong>Email:</strong> {u.email}</p>
              <p><strong>Failed Attempts:</strong> {u.failedLoginCount}</p>
              <p>
                <strong>Unlocks at:</strong>{" "}
                {new Date(u.lockUntil).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlockedUsers;
