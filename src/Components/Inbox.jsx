import { useState } from "react";
import Header from "../Header";
import GobackButton from "./GobackButton";

const Inbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Store Support", subject: "Order Update", preview: "Your order #1234 has been shipped.", time: "2h ago", read: true },
    { id: 2, sender: "Promo Deals", subject: "Limited Offer!", preview: "Get 20% off on all items.", time: "1d ago", read: false },
    { id: 3, sender: "Admin", subject: "Account Security", preview: "Your password was updated.", time: "3d ago", read: true },
    { id: 4, sender: "Customer Support", subject: "Refund Processed", preview: "Your refund for order #5678 has been issued.", time: "4h ago", read: false },
    { id: 5, sender: "Marketing Team", subject: "Upcoming Sale!", preview: "Don't miss our upcoming discounts.", time: "2d ago", read: false },
    { id: 6, sender: "Shipping Update", subject: "Delayed Shipment", preview: "Your order #7890 is delayed due to weather conditions.", time: "6h ago", read: true },
    { id: 7, sender: "Store Admin", subject: "Profile Verification", preview: "Please verify your account details.", time: "5d ago", read: false },
  ]);

  return (
    <section className="container mx-auto">
      <div>
        <Header />
      </div>
      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <GobackButton />
        <h2 className="text-xl font-semibold mt-6">Inbox</h2>
        <div className="mt-4 bg-white shadow rounded-lg p-4">
          {messages.length > 0 ? (
            <ul>
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className={`p-3 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer rounded-md ${msg.read ? 'bg-gray-50' : 'bg-white font-bold'}`}
                >
                  <p className="text-sm font-medium">{msg.sender}</p>
                  <p className="text-md font-semibold text-orange-400">{msg.subject}</p>
                  <p className="text-sm text-gray-500">{msg.preview}</p>
                  <p className="text-xs text-gray-400 text-right">{msg.time}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center py-6">No new messages</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Inbox;