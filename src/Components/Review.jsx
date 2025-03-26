import Header from "../Header";
import GobackButton from "./GobackButton";

const Review = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <GobackButton />
      </div>

      <div className="p-4 space-y-3">
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
