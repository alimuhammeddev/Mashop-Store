import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const [showPopup, setShowPopup] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null); // Stores the item to be removed

  const parsePrice = (priceStr) =>
    Number(priceStr.replace(/[^0-9.-]+/g, ""));

  const getTotalCartAmount = () =>
    cartItems.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0);

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const totalWithDelivery = getTotalCartAmount() + deliveryFee;

  const handleRemoveClick = (item) => {
    setItemToRemove(item); // Set the item to be removed
    setShowPopup(true); // Show the confirmation popup
  };

  const confirmRemove = () => {
    removeFromCart(itemToRemove.id); // Remove the item
    setShowPopup(false); // Close the popup
  };

  const cancelRemove = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-medium">Cart</h1>
        <button
          onClick={() => navigate("/wishlist")}
          className="bg-orange-400 p-2 rounded-md text-white"
        >
          View Wishlist Items
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="lg:h-[40vh] h-[20vh] flex items-center justify-center text-center">
          <p className="text-lg text-gray-600">
            Your cart is empty. Add some items to your cart!
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-2">
          <div className="grid grid-cols-6 font-semibold border-b pb-2">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center py-4 border-b"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={item.img} alt={item.name} />
              </div>
              <p>{item.name}</p>
              <p>{item.price}</p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <p>${(parsePrice(item.price) * item.quantity).toFixed(2)}</p>

              <button
                onClick={() => handleRemoveClick(item)} // Show the confirmation popup
                className="text-red-500 font-bold cursor-pointer"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Removal</h2>
            <p>Are you sure you want to remove this item <br /> from your cart?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={cancelRemove}
                className=" bg-gray-300 p-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="p-2 bg-orange-400 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <p>Subtotal</p>
                <p>${getTotalCartAmount().toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b pb-2">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${totalWithDelivery.toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={() =>
                navigate("/order", {
                  state: {
                    subtotal: getTotalCartAmount(),
                    deliveryFee,
                    total: totalWithDelivery,
                  },
                })
              }
              className="mt-4 w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
            <p className="mb-2">If you have a promo code, enter it here</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code"
                className="border p-2 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;