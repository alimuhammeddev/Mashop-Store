import Header from '../Header'
import Cards from '../Components/Cards'
import ShopCards from '../Components/ShopCards'
import Footer from '../Footer'

const Deals = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className='lg:mt-16 md:mt-40 mt-20 p-4'>
        <Cards />
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

export default Deals;