import { Shirt, ShoppingBag, Filter, Utensils, MonitorSmartphone, ShirtIcon } from "lucide-react";
import { hoddie, short } from "../assets";

const Items = () => {
  return (
    <section>
      <div>
        <h1 className="text-center bg-orange-400 text-white w-fit mx-auto p-2 rounded-md">
          Our Product Categories
        </h1>
        <h2 className="lg:text-2xl font-medium text-center px-4 mt-2">
          Search for different categories of items or products here
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
        <h1 className="flex items-center gap-2 text-center bg-orange-400 text-white w-fit p-2 rounded-md">
          <Filter /> Filter
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-5">

        <div className="w-[300px] lg:w-[350px] flex-shrink-0 p-4 bg-white shadow-lg rounded-lg">
          <div className="w-full h-48 relative">
            <img src={hoddie} alt="Brown Hoodie" className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div className="mt-3 text-center">
            <h1 className="lg:text-lg font-semibold">Brown Hoodie</h1>
            <h1 className="lg:text-xl text-base font-bold text-orange-500">Price $3,500</h1>
            <p className="line-through text-gray-400">Discount $700</p>
          </div>
        </div>

        <div className="w-[300px] lg:w-[350px] flex-shrink-0 p-4 bg-white shadow-lg rounded-lg">
          <div className="w-full h-48 relative">
            <img src={short} alt="Brown Short" className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div className="mt-3 text-center">
            <h1 className="lg:text-lg font-semibold">Short</h1>
            <h1 className="lg:text-xl text-base font-bold text-orange-500">Price $1,500</h1>
            <p className="line-through text-gray-400">Discount $300</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;