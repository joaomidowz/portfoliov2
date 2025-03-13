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
        <div className="p-4 overflow-hidden">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="ProjectsSwiper overflow-hidden"
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
            >
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={497.29}
                        height={643}
                        alt=""
                        src="/Unichat.svg"
                        style={{ objectFit: "cover" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={497.29}
                        height={643}
                        alt=""
                        src="/Onebitflix.svg"
                        style={{ objectFit: "cover" }} />
                </SwiperSlide><SwiperSlide>
                    <Image
                        className='Images'
                        width={497.29}
                        height={643}
                        alt=""
                        src="/Unichat.svg"
                        style={{ objectFit: "cover" }} />
                </SwiperSlide><SwiperSlide>
                    <Image
                        className='Images'
                        width={497.29}
                        height={643}
                        alt=""
                        src="/LoginAnimated.png"
                        style={{ objectFit: "cover" }} />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}


