import ShopCards from '../Components/ShopCards'
import Header from '../Header'

const Shop = () => {
  return (
    <section>
        <div>
            <Header />
        </div>

        <div className='p-4 lg:mt-36 mt-20'>
          <ShopCards />
        </div>
    </section>
  )
}

export default Shop