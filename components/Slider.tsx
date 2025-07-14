"use client";
import { useRef } from "react";

const Slider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const slides = [
        { img: "/img1.svg", title: "Projeto 1" },
        { img: "/img2.svg", title: "Projeto 2" },
        { img: "/img3.svg", title: "Projeto 3" },
    ];

    return (
        <div className="relative overflow-x-auto overflow-y-visible scrollbar-hide">
            <div
                ref={sliderRef}
                className="flex mx-auto gap-[26px] px-[26px] py-4 overflow-visible"
                style={{
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        data-slide
                        className="
              flex-shrink-0 scroll-snap-center
              cursor-pointer transition-transform duration-300
              hover:scale-[1.05] active:scale-[0.97]
              w-[208px] h-[269px]
              sm:w-[228px] sm:h-[295px]
              md:w-[230px] md:h-[295px]
              lg:w-[340px] lg:h-[440px]
              xl:w-[370px] xl:h-[490px]
              2xl:w-[497px] 2xl:h-[643px]
              relative z-10 overflow-visible
            "
                    >
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-full object-contain sliderImg"
                        />
                    </div>
                ))}
                <div className="flex-shrink-0 w-[1px]" />
            </div>
        </div>
    );
};

export default Slider;