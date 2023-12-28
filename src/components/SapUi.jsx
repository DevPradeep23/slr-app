"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Image from 'next/image';
// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';

const SapUi = () => {

  const SapUiData = [
    { title: "Streamline your Workload", imageUrl: "/assets/images/sapsolution-circule.png", short_description: "Our comprehensive solution is designed to streamline your workload effectively. With our services, you can effortlessly tackle payroll data conversion, ensuring a seamless transition. Importing legacy payroll results and year-end adjustments becomes a breeze, reducing complexity and saving valuable time. We simplify bonus payments and make it hassle-free. Exporting payroll master data is made efficient, and uploading benefits deductions is a straightforward process. Embrace our services to optimize your workflow and enhance productivity." },
    { title: "IT Consulting Services", imageUrl: "/assets/images/consultant.jpg", short_description: "Great Businesses set the vision for a better future and the right innovation partner will get you there. We are the experts in Technology and can collaborate with your business experts to develop a successful project plan. We help build the roadmap out a Business Strategy by analyzing their current state of IT, present IT trends, and help make decisions regarding their Technology needs and decision making. We will be available 24/7 if you want to try us to make that difference." },
    { title: "Streamline School Management with SLRIS Edumatic", imageUrl: "/assets/images/stremming.png", short_description: "Discover SLRIS Edumatic's comprehensive suite of education management solutions, designed to enhance school operations and elevate the learning experience. Our Learning Management System (LMS) introduces interactivity and engagement to education, while our robust Assessment tools provide real-time insights into student performance, empowering informed decision-making." },
  ];

  return (
    <>
      <div id='sapui' className='w-full p-2 py-10 md:hidden lg:hidden block'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

          <h2 className='py-4 text-center'>Discover Insights, Best Practices, and more</h2>
          <div className='grid grid-cols-1 gap-8'>

            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                639: {
                  slidesPerView: 1,
                },
                865: {
                  slidesPerView: 1
                },
                1000: {
                  slidesPerView: 1
                },
                1500: {
                  slidesPerView: 1
                },
                1700: {
                  slidesPerView: 1
                }
              }}
              slidesPerView={10}
              spaceBetween={20}
              grid={{
                rows: 0,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Grid]}
              className="mySwiper"
            >

              {SapUiData && SapUiData.map((list, index) => (

                <SwiperSlide className='' key={index}>
                  <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className=''>
                      <div className='m-auto'>
                        <Image width={"1000"} height={"1000"} src={list.imageUrl} className='w-full' alt='/' />
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center my-4'>
                      <h3>{list.title}</h3>
                      <p className='my-2 text-sm text-justify'>{list.short_description}</p>
                    </div>
                  </div>
                </SwiperSlide>

              ))
              }
            </Swiper>
          </div>
        </div>
      </div>


    </>
  )
}
export default SapUi;
