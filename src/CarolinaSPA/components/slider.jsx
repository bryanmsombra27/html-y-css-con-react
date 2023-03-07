// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <ul className="slider__contenedor">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            allowSlideNext={true}
            allowSlidePrev={true}
            centeredSlides
            loop={true}
          >
            <SwiperSlide>
              <li className="slider__slide">
                <img src="/img-carolina-spa/slide_01.jpg" alt="slide 1" />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="slider__slide">
                <img src="/img-carolina-spa/slide_02.jpg" alt="slide 2" />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="slider__slide">
                <img src="/img-carolina-spa/slide_03.jpg" alt="slide 3" />
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </section>

      <div className="bienvenida seccion">
        <h1 className="bienvenida__heading">
          Bienvenida(o) a nuestro <span>sitio web</span>{" "}
        </h1>

        <p className="bienvenida__texto">
          Te sentiras como nuev@ con nuestros masajistas profesionales
        </p>
      </div>
    </>
  );
};

export default Slider;
