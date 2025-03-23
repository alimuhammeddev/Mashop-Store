import {
  BookIcon,
  ChevronRight,
  CreditCard,
  GiftIcon,
  LogOut,
  MessageCircle,
  PersonStandingIcon,
  ShoppingBagIcon,
  Star,
  Timer,
  X,
} from "lucide-react";
import Header from "../Header";

const Profile = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="p-4 lg:mt-36 md:mt-36 mt-16">
        <h1 className="lg:text-2xl text-xl font-medium">My Mashop Account</h1>
        <p className="text-lg">Welcome Ali!</p>
        <p className="text-lg text-orange-400">muhammedaliali2020@gmail.com</p>
      </div>
      <p className="border w-full -mt-2"></p>

      <div className="p-4 max-w-xl space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <ShoppingBagIcon /> Orders
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <MessageCircle /> Inbox
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <Star /> Ratings and Review
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <BookIcon /> Address Book
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <CreditCard /> Payment Methods
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <GiftIcon /> Vouchers
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <Timer /> Recently Viewed
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <PersonStandingIcon /> Account Settings
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2">
            <X /> Close Account
          </h1>{" "}
          <ChevronRight className="text-orange-400" />
        </div>
      </div>
      <div className=" bg-orange-400 text-white p-2 text-center w-fit justify-center mx-auto rounded-md">
        <button className="flex items-center gap-1">
          <LogOut className="size-5" /> Log Out
        </button>
      </div>
    </section>
  );
};

export default Profile;
