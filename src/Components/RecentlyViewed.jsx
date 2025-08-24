import { useEffect, useState } from "react";
import Header from "../Header";
import GobackButton from "./GobackButton";

const RecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const viewedProducts = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentProducts(viewedProducts);
  }, []);

  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="p-4 lg:mt-40 md:mt-36 mt-16 lg:max-w-7xl mx-auto lg:p-0">
        <GobackButton />
        <h2 className="text-xl font-semibold mt-4">Recently Viewed Products</h2>
        {recentProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {recentProducts.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-500">No recently viewed products.</p>
        )}
      </div>
    </section>
  );
};

export default RecentlyViewed;
