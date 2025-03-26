import { useState } from "react";
import Header from "../Header";
import GobackButton from "./GobackButton";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiVerizon } from "react-icons/si";

const PaymentMethod = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const acceptedCards = [
    { name: "Visa", icon: <FaCcVisa className="text-blue-600 text-2xl" /> },
    {
      name: "MasterCard",
      icon: <FaCcMastercard className="text-red-600 text-2xl" />,
    },
    { name: "Verve", icon: <SiVerizon className="text-green-600 text-2xl" /> },
  ];

  const paymentMethods = ["Payment on Delivery", "Bank Transfer"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleUpdateCard = () => {
    alert("Card details updated successfully!");
  };

  return (
    <section>
      <Header />
      <div className="lg:mt-36 mt-16 p-4">
        <GobackButton />
      </div>
      <div className="p-4 max-w-lg mx-auto">
        <div className="lg:mt-2">
          <h2 className="text-xl font-semibold">Accepted Cards</h2>
          <div className="flex gap-4 mt-2">
            {acceptedCards.map((card, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-lg"
              >
                {card.icon}
                <span className="text-base">{card.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Payment Methods</h2>
          <div className="flex gap-4 mt-2">
            {paymentMethods.map((method, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-base rounded-lg"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Update Card Details</h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleUpdateCard}
              className="w-full bg-orange-400 text-white p-2 rounded-lg hover:bg-orange-500"
            >
              Update Card
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
