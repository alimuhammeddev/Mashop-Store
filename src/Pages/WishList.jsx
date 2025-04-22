import { useState } from "react";
import { ShoppingCart, Trash } from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";
import short from "../assets/short.jpg";

const WishList = () => {
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleAction = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  };

  const renderItem = () => (
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center space-x-2">
        <img
          src={short}
          alt=""
          className="w-16 h-16 flex items-center justify-center"
        />
        <div>
          <h1 className="text-lg font-semibold">Short</h1>
          <p className="text-gray-500">$9.00</p>
          <p className="text-gray-500">February 9, 2025</p>
        </div>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => handleAction("Item Removed from wishlist")}
          className="bg-orange-400 text-white p-1 rounded-full"
        >
          <Trash />
        </button>
        <button
          onClick={() => handleAction("Item Added to cart")}
          className="bg-orange-400 text-white p-1 rounded-full"
        >
          <ShoppingCart />
        </button>
      </div>
    </div>
  );

  return (
    <section>
      <Header />

      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <h1 className="text-xl font-medium">WishList</h1>

        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
      </div>

      {showPopup && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-xl shadow-lg transition-opacity duration-300 z-50">
          {popupMessage}
        </div>
      )}

      <Footer />
    </section>
  );
};

export default WishList;
