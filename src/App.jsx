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

const App = () => {
  return (
    <>
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
      </Routes>
    </>
  )
}

export default App