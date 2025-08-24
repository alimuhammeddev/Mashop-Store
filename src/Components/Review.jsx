import Header from "../Header";
import GobackButton from "./GobackButton";

const Review = () => {
  return (
    <section className="lg:max-w-7xl mx-auto lg:p-0 p-4">
      <div>
        <Header />
      </div>
      <div className="lg:mt-40 md:mt-36 mt-16">
        <GobackButton />
      </div>

      <div className="space-y-3">
        <h1 className="text-black text-xl font-semibold">
          Product Ratings and Review
        </h1>
        <p className="text-gray-500">
          You can only review this product after purchase.
        </p>
      </div>
    </section>
  );
};

export default Review;
