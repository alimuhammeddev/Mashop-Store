import { Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section className='lg:max-w-7xl mx-auto lg:p-0 p-4 lg:mt-16'>
      <div>
        <h1 className='text-center text-[#141415] lg:text-3xl text-xl font-bold'>Reviews</h1>
        <p className='text-[#141415] lg:text-xl text-base font-medium text-center'>What our clients say about us</p>
      </div>
      <Swiper
      modules={[ Pagination ]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='lg:px-14'
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Halimat</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-orange-400'>Mashop</span> is the best platform to get your items, So affordable & of good quality. I have been patronizing them for years.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Michael</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-orange-400'>Mashop</span> always deliver on time and their items are top notch. I will recommend them anyday anytime.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Susan</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'>The items I get on <span className='text-orange-400'>Mashop</span> are so affordable. I get my orders on time & they are always great. A must have.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Halimat</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-orange-400'>Mashop</span> is the best platform to get your items, So affordable & of good quality. I have been patronizing them for years.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Michael</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-orange-400'>Mashop</span> always deliver on time and their items are top notch. I will recommend them anyday anytime.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Susan</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'>The items I get on <span className='text-orange-400'>Mashop</span> are so affordable. I get my orders on time & they are always great. A must have.</p>
        </div>
      </SwiperSlide><br /><br />
    </Swiper>
    </section>
  )
}

export default Testimonial;