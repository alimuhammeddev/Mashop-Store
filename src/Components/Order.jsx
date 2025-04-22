import { useState } from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const { subtotal = 0, deliveryFee = 0, total = 0 } = location.state || {};

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };

  const handleCloseModal = () => {
    setShowPaymentOptions(false);
  };

  return (
    <>
      <form className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl">
        {/* Left Section - Delivery Information */}
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-gray-800">
            Delivery Information
          </p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Street"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="State"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip code"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Right Section - Cart Totals */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Cart Totals
          </h1>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-gray-800">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleProceedToPayment}
            className="mt-6 w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition-all"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </form>

      {showPaymentOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Choose Payment Method
            </h2>
            <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500">
              Pay with Paystack
            </button>
            <button className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500">
              Pay with Card
            </button>
            <button
              onClick={handleCloseModal}
              className="w-full text-gray-500 hover:underline mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
