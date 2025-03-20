import Cart from "../Components/Cart"
import Footer from "../Footer"
import Header from "../Header"

const ShoppingCart = () => {
  return (
    <section>
        <div>
            <Header />
        </div>

        <div className="p-4 lg:mt-36 md:mt-36 mt-16">
            <Cart />
        </div>

        <div>
          <Footer />
        </div>
    </section>
  )
}

export default ShoppingCart