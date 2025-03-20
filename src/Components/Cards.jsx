import { gadget, laptop, phone, woman1 } from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import ProductPopup from "./ProductPopup";

const cardsData = [
  { img: gadget, title: "Complete Set Gadget full set", price: "$21,000", oldPrice: "$50,000", discount: "50% Discount" },
  { img: woman1, title: "New Set of Gadget", price: "$11,000", oldPrice: "$5,000", discount: "70% Discount" },
  { img: laptop, title: "Phone and Laptop", price: "$110,000", oldPrice: "$60,000", discount: "30% Discount" },
  { img: phone, title: "Set of Gadget Devices", price: "$81,000", oldPrice: "$30,000", discount: "40% Discount" },
];

const Cards = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, ease: "linear", duration: 10 },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section className="overflow-hidden">
      <div>
        <h1 className="text-center bg-orange-400 text-white w-fit mx-auto p-2 rounded-md">
          Our Latest Collections
        </h1>
        <h2 className="lg:text-2xl font-medium text-center px-4 mt-2">
          Shop all our latest collections here and enjoy up to 50% discount or more on each product you shop{" "}
        </h2>
      </div>

      <div className="relative overflow-hidden mt-5">
        <motion.div
          className="flex space-x-4 w-max"
          animate={controls}
        >
          {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
            <div
              key={index}
              className="w-[300px] lg:w-[350px] flex-shrink-0 p-4 bg-white shadow-lg rounded-lg relative group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-2 left-2 text-white bg-black/50 px-2 py-1 rounded">
                  {card.discount}
                </div>

                <div className="absolute inset-0 flex items-center justify-center space-x-3 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShoppingCart size={40} className="text-orange-500 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform" />
                  <Heart size={40} className="text-orange-500 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform" />
                  <Eye
                    size={40}
                    className="text-orange-500 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setSelectedProduct(card)}
                  />
                </div>
              </div>

              <div className="mt-3 text-center">
                <h1 className="lg:text-lg font-semibold">{card.title}</h1>
                <p className="lg:text-xl text-base font-bold text-orange-500">{card.price}</p>
                <p className="line-through text-gray-400">{card.oldPrice}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {selectedProduct && <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </section>
  );
};

export default Cards;