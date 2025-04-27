import { useEffect, useState } from "react";
import { hero } from "../assets";
import Cards from "../Components/Cards";
import Items from "../Components/Items";
import Footer from "../Footer";
import Header from "../Header";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div>
        <Header />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="relative p-4 lg:mt-36 md:mt-36 mt-16">
            <img src={hero} alt="" className="w-full" />
            <div className="absolute lg:top-36 md:top-16 top-6 lg:right-36 space-y-2 right-10">
              <h1 className="text-white text-lg font-medium lg:text-4xl">
                Enjoy up to 50% off <br /> on selected items
              </h1>
              <p className="lg:block md:block hidden text-white text-2xl">
                Shop on all your favourite items on Mashop today, <br /> We are the best e-commerce brand and customers <br /> satisfaction is our top priority
              </p>
              <div>
                <button className="bg-gray-900 text-white py-2 px-2 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <Cards />
          </div>

          <div className="p-4 mt-5">
            <Items />
          </div>
        </>
      )}

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;