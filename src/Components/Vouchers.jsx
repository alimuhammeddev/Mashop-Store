import { useState } from "react";
import Header from "../Header";
import GobackButton from "./GobackButton";

const Vouchers = () => {
  const [vouchers, setVouchers] = useState([
    { id: 1, code: "DISCOUNT10", description: "10% off on your next purchase" },
    { id: 2, code: "FREESHIP", description: "Free shipping on orders above $50" },
    { id: 3, code: "WELCOME5", description: "$5 off for new users" },
  ]);

  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="p-4 lg:mt-40 md:mt-36 mt-16 lg:max-w-7xl mx-auto lg:p-0">
        <GobackButton />
        <h2 className="text-xl font-semibold mt-4">Available Vouchers</h2>
        <ul className="mt-4 space-y-2">
          {vouchers.length > 0 ? (
            vouchers.map((voucher) => (
              <li
                key={voucher.id}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <p className="text-lg font-medium text-orange-400"><span className="text-black">Voucher Code:</span> {voucher.code}</p>
                <p className="text-sm text-gray-600">{voucher.description}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No vouchers available.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Vouchers;
