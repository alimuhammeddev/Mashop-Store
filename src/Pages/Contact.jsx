import { contact } from '../assets'
import Header from '../Header'
import Footer from '../Footer'

const Contact = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className='lg:p-0 p-4 lg:mt-40 mt-16 lg:max-w-7xl mx-auto'>
                <div>
                    <h1 className='text-center lg:text-3xl text-xl font-medium'>Contact us</h1>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-8 mt-4'>
                    <div>
                        <img src={contact} alt="" />
                    </div>

                    <div>
                        <div className='lg:mt-0 mt-3'>
                            <h1 className='text-[#1B1B1B] lg:text-2xl text-lg font-semibold'>Send us a message</h1>
                            <p className='text-[#645D5D] text-[16px]'>You can’t find what you need? We can help!</p>
                        </div>
                        <form action="#" className="space-y-4">
                            <div className='leading-loose mt-3'>
                                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="name">Your name</label>
                                <input
                                    className="lg:w-[600px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                                    placeholder="Enter your name"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className='leading-loose'>
                                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="email">Your email address</label>
                                <input
                                    className="lg:w-[600px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                                    placeholder="Enter your email address"
                                    type="email"
                                    id="email"
                                />
                            </div>

                            <div className='leading-loose'>
                                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="message">Your message</label>

                                <textarea
                                    className="lg:w-[600px] lg:h-[147px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                                    placeholder="Tell us how we can help"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <div className='mt-5'>
                                    <button className='text-[#1B1B1B] lg:text-xl text-base p-2 lg:px-10 px-7 bg-orange-400'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <Footer />
            </div>
        </section>
    )
}

export default Contact