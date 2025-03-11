// components/CardSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

interface Card {
  id: number;
  imageUrl: string; // Caminho da imagem na pasta public
}

const CardSlider = () => {
  const cards: Card[] = [
    { id: 1, imageUrl: 'Unichat.svg' },
    { id: 2, imageUrl: 'Unichat.svg' },
    { id: 3, imageUrl: 'Unichat.svg' },
    { id: 4, imageUrl: 'Unichat.svg' },
    { id: 5, imageUrl: 'Unichat.svg' },
    { id: 6, imageUrl: 'Unichat.svg' },
  ];

  return (
    <div className="p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3} // Exibe 3 imagens por vez
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer active:scale-95"
              onClick={() => alert(`Clicou na imagem ${card.id}`)}
            >
              <img
                src={card.imageUrl} // Caminho da imagem
                alt={`Imagem ${card.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;