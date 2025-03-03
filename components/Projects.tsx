"use client"; // Adicione isso no topo do arquiv
import '../app/swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

export default function Projects() {
    return (
        <div className="h-100 rounded-t-2xl shadow-3xl bg-secundary font-all font-bold">
            <h2 className="text-base text-primary p-5">Projetos</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="ProjectsSwiper"
            >
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={228}
                        height={295}
                        alt=""
                        src="/LoginAnimated.svg"
                        style={{ objectFit: "cover" }}
                        sizes="" /> </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={228}
                        height={295}
                        alt=""
                        src="/Unichat.svg"
                        sizes="" /> </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={228}
                        height={295}
                        alt=""
                        src="/Unichat.svg"
                        sizes="" /> </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className='Images'
                        width={228}
                        height={295}
                        alt=""
                        src="/LoginAnimated.svg"
                        sizes="" /> </SwiperSlide>
            </Swiper>
        </div>
    );
}
