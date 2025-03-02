import { hero } from "../assets";
import Cards from "../Components/Cards";
import Header from "../Header";

const Home = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="relative p-4 lg:mt-36 md:mt-28 mt-16">
        <img src={hero} alt="" className="w-full" />
        <div className="absolute lg:top-36 top-5 lg:right-36 space-y-2 right-10">
          <h1 className="text-white text-xl lg:text-5xl">Enjoy up to 50% off <br /> on selected items</h1>
          <p className="lg:block hidden text-white text-3xl">Shop on all your favourite items on Mashop today, <br /> We are the best e-commerce brand and cutomers <br /> satisfaction is our top priority</p>
          <div>
            <button className="bg-black text-white py-2 px-2 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Cards />
      </div>
    </section>
  );
};

export default Home;
