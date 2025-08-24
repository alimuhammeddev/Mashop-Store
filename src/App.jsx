import Home from "./Pages/Home"
import Login from "./Login"
import SignUp from "./SignUp"
import { Route, Routes } from "react-router-dom"
import Shop from "./Pages/Shop"
import Deals from "./Pages/Deals"
import Categories from "./Pages/Categories"
import ShoppingCart from "./Pages/ShoppingCart"
import Checkout from "./Pages/Checkout"
import Profile from "./Pages/Profile"
import OrdersList from "./Components/OrdersList"
import Inbox from "./Components/Inbox"
import Review from "./Components/Review"
import Address from "./Components/Address"
import PaymentMethod from "./Components/PaymentMethod"
import Vouchers from "./Components/Vouchers"
import RecentlyViewed from "./Components/RecentlyViewed"
import AccountSettings from "./Components/AccountSettings"
import ScrollToTop from "./Components/ScrollToTop"
import WishList from "./Pages/WishList"
import { CartProvider } from "./context/CartContext"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/order" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/review" element={<Review />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/recently-viewed" element={<RecentlyViewed />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </CartProvider>
  )
}

export default App