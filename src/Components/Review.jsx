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
    </section>
  );
};

export default Review;
