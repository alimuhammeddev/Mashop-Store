const Order = () => {
  return (
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
            <p>$0</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>$0</p>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-gray-800">
            <p>Total</p>
            <p>$0</p>
          </div>
        </div>
        <button className="mt-6 w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition-all">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default Order;
