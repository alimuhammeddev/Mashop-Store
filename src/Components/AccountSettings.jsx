import { useState } from "react";
import Header from "../Header";
import GobackButton from "./GobackButton";

const AccountSettings = () => {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [password, setPassword] = useState({ current: "", new: "" });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log("Updated profile:", profile);
    console.log("Updated password:", password);
    console.log("Updated notifications:", notifications);
    alert("Settings updated successfully!");
  };

  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <GobackButton />
      </div>

      <div className="max-w-md mx-auto p-4 space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Account Settings</h2>
          <input
            className="border p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none rounded-md"
            type="text"
            placeholder="Name"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}  
          />
          <input
            className="border p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none rounded-md"
            type="email"
            placeholder="Email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <input
            className="border p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none rounded-md"
            type="password"
            placeholder="Current Password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
          />
          <input
            className="border p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none rounded-md"
            type="password"
            placeholder="New Password"
            name="new"
            value={password.new}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="flex justify-between items-center">
            <span>Email</span>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({ ...notifications, email: e.target.checked })
              }
            />
          </div>
          <div className="flex justify-between items-center">
            <span>SMS</span>
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({ ...notifications, sms: e.target.checked })
              }
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition duration-300"
        >
          Update
        </button>
      </div>
    </section>
  );
};

export default AccountSettings;