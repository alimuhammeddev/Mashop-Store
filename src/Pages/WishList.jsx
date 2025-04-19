import { ShoppingCart, Trash } from "lucide-react";
import Footer from "../Footer"
import Header from "../Header"
import short from "../assets/short.jpg";

const WishList = () => {
  return (
    <section>
            <div>
                <Header />
            </div>
    
            <div className="p-4 lg:mt-36 md:mt-36 mt-16">
              <div>
                <h1 className="text-xl font-medium">WishList</h1>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center space-x-2">
                  <img src={short} alt="" className="w-16 h-16 flex items-center justify-center"/>
                  <div>
                    <h1 className="text-lg font-semibold">Short</h1>
                    <p className="text-gray-500">$9.00</p>
                    <p className="text-gray-500">February 9, 2025</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="bg-orange-400 text-white p-1 rounded-full"><Trash /></button>
                  <button className="bg-orange-400 text-white p-1 rounded-full"><ShoppingCart /></button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center space-x-2">
                  <img src={short} alt="" className="w-16 h-16 flex items-center justify-center"/>
                  <div>
                    <h1 className="text-lg font-semibold">Short</h1>
                    <p className="text-gray-500">$9.00</p>
                    <p className="text-gray-500">February 9, 2025</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="bg-orange-400 text-white p-1 rounded-full"><Trash /></button>
                  <button className="bg-orange-400 text-white p-1 rounded-full"><ShoppingCart /></button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center space-x-2">
                  <img src={short} alt="" className="w-16 h-16 flex items-center justify-center"/>
                  <div>
                    <h1 className="text-lg font-semibold">Short</h1>
                    <p className="text-gray-500">$9.00</p>
                    <p className="text-gray-500">February 9, 2025</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="bg-orange-400 text-white p-1 rounded-full"><Trash /></button>
                  <button className="bg-orange-400 text-white p-1 rounded-full"><ShoppingCart /></button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center space-x-2">
                  <img src={short} alt="" className="w-16 h-16 flex items-center justify-center"/>
                  <div>
                    <h1 className="text-lg font-semibold">Short</h1>
                    <p className="text-gray-500">$9.00</p>
                    <p className="text-gray-500">February 9, 2025</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="bg-orange-400 text-white p-1 rounded-full"><Trash /></button>
                  <button className="bg-orange-400 text-white p-1 rounded-full"><ShoppingCart /></button>
                </div>
              </div>
            </div>
    
            <div>
              <Footer />
            </div>
        </section>
  )
}

export default WishList 