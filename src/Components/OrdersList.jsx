import { ChevronLeft } from "lucide-react";
import Header from "../Header";
import { Link } from "react-router-dom";

const OrdersList = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <div>
          <Link to="/profile">
            <button className="flex items-center text-lg">
              <ChevronLeft className="size-5" /> back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrdersList;
