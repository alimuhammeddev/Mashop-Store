import ShopCards from '../Components/ShopCards'
import Header from '../Header'
import Footer from '../Footer'

const Shop = () => {
  return (
    <section>
        <div>
            <Header />
        </div>

        <div className='p-4 lg:mt-36 mt-20'>
          <ShopCards />
        </div>

        <div>
          <Footer />
        </div>
    </section>
  )
}

export default Shop