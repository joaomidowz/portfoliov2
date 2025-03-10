"use client";
import '../app/swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

export default function Slider() {
    return (
        <div className="">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="ProjectsSwiper transition-transform duration-300 ease-out hover:scale-105 active:scale-90"
            >
                <SwiperSlide>
                    <Image
                        className='Images '
                        width={228}
                        height={295}
                        alt=""
                        src="/Unichat.svg"

                        style={{ objectFit: "cover" }} /> </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={228}
                        height={295}
                        alt=""
                        src="/Unichat.svg"

                        style={{ objectFit: "cover" }} /> </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={228}
                        height={295}
                        alt=""
                        src="/LoginAnimated.svg"

                        style={{ objectFit: "cover" }} /> </SwiperSlide>
            </Swiper>

        </div>
    );
}


