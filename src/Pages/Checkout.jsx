import Order from "../Components/Order"
import Footer from "../Footer"
import Header from "../Header"

const Checkout = () => {
  return (
    <section>
        <div>
            <Header />
        </div>
        <div className="lg:mt-36 md:mt-36 mt-16">
            <Order />
        </div>
        <div>
            <Footer />
        </div>
    </section>
  )
}

export default Checkout