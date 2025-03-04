import { useState } from "react";
import { ArrowDownIcon, Eye, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import {
    accessories1,
    bags,
    blender,
    cloth,
    clothe,
    clothes,
    clothing,
  devices,
  digitalwatch,
  drone,
  gadget,
  headphone,
  headset,
  jacket,
  keyboard,
  kit,
  kitchenset,
  laptop2,
  laptop3,
  laptop4,
  phone,
  plasma,
  printer,
  rating1,
  rating2,
  rating3,
  samsung,
  setkitchen,
  short,
  smartwatch,
  standingtv,
  tozo,
  tv,
  woman1,
  zfold,
} from "../assets";

const productsData = [
  { img: tv, price: "$70", ratingImg: rating1, rating: 738 },
  { img: headphone, price: "$200", oldPrice: "$300", ratingImg: rating2, rating: 520 },
  { img: samsung, price: "$110", ratingImg: rating3, rating: 612 },
  { img: keyboard, price: "$80", oldPrice: "$100", ratingImg: rating1, rating: 450 },
  { img: printer, price: "$80", oldPrice: "$100", ratingImg: rating3, rating: 389 },
  { img: plasma, price: "$80", oldPrice: "$100", ratingImg: rating1, rating: 275 },
  { img: tozo, price: "$80", oldPrice: "$100", ratingImg: rating2, rating: 815 },
  { img: standingtv, price: "$80", oldPrice: "$100", ratingImg: rating3, rating: 920 },
  { img: headset, price: "$110", ratingImg: rating1, rating: 220 },
  { img: zfold, price: "$450", oldPrice: "$500", ratingImg: rating3, rating: 250 },
  { img: jacket, price: "$95", oldPrice: "$120", ratingImg: rating3, rating: 320 },
  { img: digitalwatch, price: "$100", oldPrice: "$150", ratingImg: rating2, rating: 520 },
  { img: phone, price: "$200", oldPrice: "$250", ratingImg: rating1, rating: 120 },
  { img: kit, price: "$90", ratingImg: rating3, rating: 20 },
  { img: kitchenset, price: "$80", oldPrice: "$100", ratingImg: rating2, rating: 200 },
  { img: setkitchen, price: "$100", oldPrice: "$120", ratingImg: rating2, rating: 300 },
  { img: clothing, price: "$500", oldPrice: "$550", ratingImg: rating1, rating: 150 },
  { img: clothe, price: "$400", oldPrice: "$500", ratingImg: rating1, rating: 250 },
  { img: cloth, price: "$300", oldPrice: "$350", ratingImg: rating3, rating: 920 },
  { img: laptop4, price: "$300", oldPrice: "$450", ratingImg: rating1, rating: 100 },
  { img: laptop2, price: "$1000", oldPrice: "$1500", ratingImg: rating1, rating: 45 },
  { img: laptop3, price: "$2000", oldPrice: "$2500", ratingImg: rating1, rating: 50 },
  { img: accessories1, price: "$80", oldPrice: "$90", ratingImg: rating2, rating: 32 },
  { img: bags, price: "$40", oldPrice: "$65", ratingImg: rating3, rating: 49 },
  { img: devices, price: "$95", oldPrice: "$100", ratingImg: rating3, rating: 499 },
  { img: drone, price: "$3500", oldPrice: "$4500", ratingImg: rating2, rating: 600 },
  { img: smartwatch, price: "$300", oldPrice: "$250", ratingImg: rating2, rating: 299 },
  { img: woman1, price: "$330", oldPrice: "$350", ratingImg: rating3, rating: 99 },
  { img: gadget, price: "$420", oldPrice: "$460", ratingImg: rating2, rating: 83 },
  { img: blender, price: "$65", oldPrice: "$70", ratingImg: rating1, rating: 55 },
  { img: short, price: "$50", ratingImg: rating3, rating: 33 },
  { img: clothes, price: "$330", oldPrice: "$380", ratingImg: rating1, rating: 48 },
];

const ITEMS_PER_PAGE = 8;

const ShopCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = productsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="max-w-7xl mx-auto lg:p-4 p-2">
      <div className="lg:flex items-center justify-between lg:flex-row flex-col">
        <h1 className="lg:text-2xl font-medium">Shop on all kinds of products here</h1>
        <div className="flex items-center gap-2 cursor-pointer lg:mt-0 md:mt-0 mt-3">
          <p>Sort by:</p>
          <h1 className="flex items-center bg-white border-orange-400 border text-orange-400 p-1 rounded-sm gap-1">
            Most Popular <ArrowDownIcon className="size-5" />
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-5">
        {selectedProducts.map((product, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 p-2 rounded-md w-full group hover:shadow-xl transition duration-300"
          >
            <div className="relative">
              <img src={product.img} alt="Product" className="flex justify-center mx-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
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
            <div>
              <h1 className="flex items-center text-xs mt-3">
                <img src={product.ratingImg} alt="Rating" className="w-16" /> ({product.rating})
              </h1>
              <h2>Lorem ipsum dolor sit</h2>
              <p className="text-orange-400 font-semibold lg:text-base text-sm">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 font-normal mr-1">
                    {product.oldPrice}
                  </span>
                )}
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 items-center gap-4">
        <button
          className="p-2 bg-orange-500 text-white rounded-full disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ChevronLeft className="size-6" />
        </button>
        <span className="text-lg font-semibold text-orange-500">
          {currentPage} <span className="text-gray-500">/ {totalPages}</span>
        </span>
        <button
          className="p-2 bg-orange-500 text-white rounded-full disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </section>
  );
};

export default ShopCards;