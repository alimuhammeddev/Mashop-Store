import { useState } from "react";
import Header from "../Header";
import GobackButton from "./GobackButton";

const Address = () => {
  const [details, setDetails] = useState({
    address1: "",
    address2: "",
    phoneNumbers: ["", ""],
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (index, value) => {
    const updatedPhones = [...details.phoneNumbers];
    updatedPhones[index] = value;
    setDetails({ ...details, phoneNumbers: updatedPhones });
  };

  const handleUpdate = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section>
      <Header />
      <div className="p-4 lg:mt-40 md:mt-36 mt-16 lg:max-w-7xl mx-auto lg:p-0">
        <GobackButton />
        <div className="mt-6 p-4 border rounded-lg shadow-md w-full max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4">Customer Address</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Address 1</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address1"
                  value={details.address1}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-300 focus:outline-none"
                />
              ) : (
                <p className="p-2 border rounded bg-gray-100">{details.address1 || "Not provided"}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Address 2</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address2"
                  value={details.address2}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-300 focus:outline-none"
                />
              ) : (
                <p className="p-2 border rounded bg-gray-100">{details.address2 || "Not provided"}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number 1</label>
              {isEditing ? (
                <input
                  type="text"
                  value={details.phoneNumbers[0]}
                  onChange={(e) => handlePhoneChange(0, e.target.value)}
                  className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-300 focus:outline-none"
                />
              ) : (
                <p className="p-2 border rounded bg-gray-100">{details.phoneNumbers[0] || "Not provided"}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number 2</label>
              {isEditing ? (
                <input
                  type="text"
                  value={details.phoneNumbers[1]}
                  onChange={(e) => handlePhoneChange(1, e.target.value)}
                  className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-300 focus:outline-none"
                />
              ) : (
                <p className="p-2 border rounded bg-gray-100">{details.phoneNumbers[1] || "Not provided"}</p>
              )}
            </div>
            <button
              onClick={handleUpdate}
              className="w-full bg-orange-400 text-white p-2 rounded mt-4 hover:bg-orange-500"
            >
              {isEditing ? "Save Details" : "Update Details"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;