import { ArrowDownIcon, Eye, Heart, ShoppingCart } from "lucide-react";
import { headphone, keyboard, plasma, printer, rating1, rating2, rating3, samsung, standingtv, tozo, tv } from "../assets";

const ShopCards = () => {
  return (
    <section className="max-w-7xl mx-auto lg:p-4 p-2">
      {/* Header Section */}
      <div className="lg:flex items-center justify-between lg:flex-row flex-col">
        <h1 className="lg:text-2xl font-medium">
          Shop on all kinds of products here
        </h1>
        <div className="flex items-center gap-2 cursor-pointer lg:mt-0 md:mt-0 mt-3">
          <p>Sort by:</p>
          <h1 className="flex items-center bg-white border-orange-400 border text-orange-400 p-1 rounded-sm gap-1">
            Most Popular <ArrowDownIcon className="size-5" />
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-5">
        {[
          { img: tv, price: "$70", ratingImg: rating1, rating: 738 },
          { img: headphone, price: "$200", oldPrice: "$300", ratingImg: rating2, rating: 520 },
          { img: samsung, price: "$110", ratingImg: rating3, rating: 612 },
          { img: keyboard, price: "$80", oldPrice: "$100", ratingImg: rating1, rating: 450 },
          { img: printer, price: "$80", oldPrice: "$100", ratingImg: rating3, rating: 389 },
          { img: plasma, price: "$80", oldPrice: "$100", ratingImg: rating1, rating: 275 },
          { img: tozo, price: "$80", oldPrice: "$100", ratingImg: rating2, rating: 815 },
          { img: standingtv, price: "$80", oldPrice: "$100", ratingImg: rating3, rating: 920 },
        ].map((product, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 p-2 rounded-md w-full group"
          >
            {/* Image Container with Hover Icons */}
            <div className="relative">
              <img src={product.img} alt="Product" className="flex justify-center mx-auto" />
              
              {/* Hover Icons */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-400 hover:text-white transition">
                  <Eye className="size-5" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-400 hover:text-white transition">
                  <Heart className="size-5" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-400 hover:text-white transition">
                  <ShoppingCart className="size-5" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="flex items-center text-xs">
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
    </section>
  );
};

export default ShopCards;