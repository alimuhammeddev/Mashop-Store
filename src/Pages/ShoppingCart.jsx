import Cart from "../Components/Cart"
import Footer from "../Footer"
import Header from "../Header"

const ShoppingCart = () => {
  return (
    <section>
        <div>
            <Header />
        </div>

        <div className="lg:p-0 p-4 lg:mt-48 md:mt-36 mt-20 lg:max-w-7xl mx-auto">
            <Cart />
        </div>

        <div>
          <Footer />
        </div>
    </section>
  )
}

export default ShoppingCart