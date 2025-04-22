import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const getTotalCartAmount = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const totalWithDelivery = getTotalCartAmount() + deliveryFee;

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
              <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
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

              <p>${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-bold cursor-pointer"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between border-b pb-2">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${totalWithDelivery}</p>
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
