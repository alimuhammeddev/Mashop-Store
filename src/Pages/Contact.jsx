import { contact } from '../assets'
import Header from '../Header'

const Contact = () => {
  return (
    <section>
        <div>
            <Header />
        </div>

        <div className='p-4 lg:mt-36 mt-16'>
            <div>
                <h1 className='text-center lg:text-3xl text-xl font-medium'>Contact us</h1>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8'>
                <div>
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact