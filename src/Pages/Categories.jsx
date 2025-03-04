import Header from "../Header"
import Items from "../Components/Items"
import ShopCards from "../Components/ShopCards"
import Footer from "../Footer"

const Categories = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className='lg:mt-48 md:mt-40 mt-24 p-4'>
        <Items />
      </div>

      <div className='mt-10 p-4'>
        <ShopCards />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  )
}

export default Categories