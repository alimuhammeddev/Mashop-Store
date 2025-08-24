import Testimonial from "../Components/Testimonial";
import Header from "../Header";
import Footer from "../Footer";

const About = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className="lg:p-0 p-4 lg:mt-40 mt-16 lg:max-w-7xl mx-auto space-y-12">

                <div>
                    <h1 className="text-center lg:text-4xl text-2xl font-semibold text-gray-800">
                        About Us
                    </h1>
                    <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
                        Learn more about our story, mission, and values.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 lg:p-10">
                    <h2 className="lg:text-2xl text-lg font-semibold text-gray-800">
                        Who We Are
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to <span className="font-semibold">Mashop</span> – your
                        trusted destination for quality products at the best prices. We are
                        passionate about providing customers with an enjoyable shopping
                        experience by combining convenience, affordability, and excellent
                        service.
                    </p>
                </div>

                <div>
                    <div>
                        <h1 className="lg:text-2xl text-lg font-semibold text-gray-800 text-center">Our Values</h1>
                        <p className="text-base font-medium text-gray-800 text-center">What do we cherish?</p>
                    </div>
                    <div className="grid lg:grid-cols-3 lg:gap-5 gap-3 mt-3">
                        <div className='border-orange-400 border-2 rounded-lg text-gray-800 p-3'>
                            <h1 className='text-lg font-bold'>High Quality</h1>
                            <p>We are committed to creating high-quality <br className='lg:block hidden' /> garments using skilled craftsmanship and <br className='lg:block hidden' /> attention to detail. We use premium <br className='lg:block hidden' /> materials, and expert tailoring.</p>
                        </div>

                        <div className='border-orange-400 border-2 rounded-lg text-gray-800 p-3'>
                            <h1 className='text-lg font-bold'>User First</h1>
                            <p>We are committed to putting our <br className='lg:block hidden' /> customer's needs first. We believe in <br className='lg:block hidden' /> establishing a good relation with our <br className='lg:block hidden' /> customers.</p>
                        </div>

                        <div className='border-orange-400 border-2 rounded-lg text-gray-800 p-3'>
                            <h1 className='text-lg font-bold'>Inclusivity and Diversity</h1>
                            <p>Our designs are thoughtfully created to <br className='lg:block hidden' /> celebrate the beauty in every shade, shape, <br className='lg:block hidden' /> and size. We help everyone find their <br className='lg:block hidden' /> taste in our collections.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Testimonial />
                </div>

                <div className="bg-gradient-to-r from-orange-400 to-orange-400 rounded-xl lg:p-10 p-4 text-center text-white shadow-lg">
                    <h2 className="text-2xl font-semibold mb-3">Stay Updated</h2>
                    <p className="mb-6 text-blue-100 max-w-xl mx-auto">
                        Subscribe to our newsletter to receive the latest news, offers, and
                        updates directly in your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg text-gray-800 flex-grow focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-10">
                <Footer />
            </div>
        </section>
    );
};

export default About;