import { useState } from "react";
import { Shirt, ShoppingBag, Utensils, MonitorSmartphone, ShoppingCart, Heart, Eye, ShirtIcon } from "lucide-react";
import { accessories1, blender, bluepants, cloth, clothes, clothing, girl, hoddie, jacket, kit, kitchen2, kitchenset, laptop2, laptop4, phone, plates, short, smartphone, smartwatch, whiteshirt } from "../assets";

const Items = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const items = [
    { id: 1, img: hoddie, name: "Brown Hoodie", price: "$3,500", discount: "$700" },
    { id: 2, img: short, name: "Short", price: "$1,500", discount: "$300" },
    { id: 3, img: girl, name: "Black Shirt", price: "$700", discount: "$150" },
    { id: 4, img: clothes, name: "Hoodies (Different colors)", price: "$2,000", discount: "$500" },
    { id: 5, img: whiteshirt, name: "White Shirt and Cap", price: "$1,000", discount: "$250" },
    { id: 6, img: smartphone, name: "Smartphone (New Series)", price: "$9,500", discount: "$800" },
    { id: 7, img: smartwatch, name: "Smartwatch pro", price: "$800", discount: "$50" },
    { id: 8, img: kitchenset, name: "Full kitchen set", price: "$500", discount: "$25" },
    { id: 9, img: accessories1, name: "Men accessories", price: "$1,500", discount: "$450" },
    { id: 10, img: blender, name: "Kitchen Blender", price: "$5,000", discount: "$2,000" },
    { id: 11, img: clothing, name: "Men Designer T-shirt", price: "$900", discount: "$70" },
    { id: 12, img: plates, name: "Kitchen plates and cups", price: "$300", discount: "$10" },
    { id: 13, img: jacket, name: "Brown unisex jacket", price: "$250", discount: "$15" },
    { id: 14, img: cloth, name: "Cloth (Complete set)", price: "$750", discount: "$35" },
    { id: 15, img: kit, name: "Women's makeup kit", price: "$300", discount: "$20" },
    { id: 16, img: bluepants, name: "Men's blue pants", price: "$200", discount: "$25" },
    { id: 17, img: kitchen2, name: "Kitchen utensils", price: "$150", discount: "$30" },
    { id: 18, img: phone, name: "Complete Set Gadget (Apple series)", price: "$10,000", discount: "$220" },
    { id: 19, img: laptop2, name: "Computer Laptop", price: "$5000", discount: "$500" },
    { id: 20, img: laptop4, name: "Macbook air pro", price: "$15,000", discount: "$100" },
  ];

  const visibleItems = items.slice(0, visibleCount);

  return (
    <section>
      <div>
        <h1 className="text-center bg-orange-400 text-white w-fit mx-auto p-2 rounded-md">
          Our Product Categories
        </h1>
        <h2 className="lg:text-2xl font-medium text-center px-4 mt-2">
          See different categories of items or products here
        </h2>
      </div>

      <div className="flex items-center justify-center flex-wrap mt-5 gap-2">
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <Shirt /> Clothes
        </h1>
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <ShirtIcon /> Shirts
        </h1>
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <Shirt /> Trousers
        </h1>
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <MonitorSmartphone /> Gadgets
        </h1>
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <ShoppingBag /> Accessories
        </h1>
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <Utensils /> Kitchen Utensils
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {visibleItems.map((item) => (
          <div key={item.id} className="w-[300px] lg:w-[350px] flex-shrink-0 p-4 bg-white shadow-lg rounded-lg group">
            {/* Image Container */}
            <div className="w-full h-48 relative overflow-hidden rounded-lg">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-lg" />
              
              {/* Icons Overlay (Hidden by Default) */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                  <ShoppingCart className="text-orange-500 w-6 h-6" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                  <Heart className="text-orange-500 w-6 h-6" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                  <Eye className="text-orange-500 w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-3 text-center">
              <h1 className="lg:text-lg font-semibold">{item.name}</h1>
              <h1 className="lg:text-xl text-base font-bold text-orange-500">Price {item.price}</h1>
              <p className="line-through text-gray-400">Discount {item.discount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div>
        <button
          className="bg-orange-400 text-white py-2 px-4 rounded-md mt-5 justify-center mx-auto flex"
          onClick={() =>
            visibleCount < items.length ? setVisibleCount(visibleCount + 4) : setVisibleCount(4)
          }
        >
          {visibleCount < items.length ? "View More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};

export default Items;