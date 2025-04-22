import Header from "../Header";
import GobackButton from "./GobackButton";
import bags from "../assets/bags.jpg";
import devices from "../assets/devices.jpg";
import hoddie from "../assets/hoddie.jpg";

const OrdersList = () => {
  const orders = [
    { 
      id: "12345", 
      date: "2025-03-20", 
      status: "Shipped", 
      total: "120.00", 
      image: bags 
    },
    { 
      id: "67890", 
      date: "2025-03-18", 
      status: "Processing", 
      total: "85.50", 
      image: devices 
    },
    { 
      id: "54321", 
      date: "2025-03-15", 
      status: "Delivered", 
      total: "99.99", 
      image: hoddie 
    },
  ];

  return (
    <section className="container mx-auto">
      <Header />

      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <GobackButton />
        <h2 className="text-xl font-semibold my-4">Your Orders</h2>

        <div className="bg-white p-4 rounded-lg shadow-md">
          {orders.length > 0 ? (
            <ul>
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="border-b p-4 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <img src={order.image} alt="Product" className="w-16 h-16 rounded-md" />
                    <div>
                      <p className="font-semibold">Order ID: {order.id}</p>
                      <p className="text-gray-500 text-sm">Date: {order.date}</p>
                      <p className="text-gray-700">Status: {order.status}</p>
                      <button className=" text-gray-500 mt-2 hover:text-orange-500 duration-500">Track Order</button>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-orange-400">${order.total}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No orders found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrdersList;