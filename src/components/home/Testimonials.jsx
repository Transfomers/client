import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className="flex items-center justify-center">
      < div className="flex items-center justify-center h-[460px] w-[70%] rounded-3xl bg-gradient-to-r from-[#0b3d2e] via-[#1bbd6f] to-[#e6f94c] max-sm:bg-none max-md:bg-none"
      >
        <div className="w-screen p-14 rounded-xl bg-opacity-75 flex items-center justify-center">
          <Swiper
            className="overflow-visible m-3"
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{ enabled: false }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialCard
                title="Formation de qualité"
                testimonial="Grâce à ITC Santé, j'ai acquis des compétences pratiques qui m'ont permis de décrocher rapidement un emploi dans le secteur médical."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                title="Accompagnement exceptionnel"
                testimonial="L’équipe pédagogique d’ITC Santé m’a accompagné tout au long de ma formation et même après, pour mon insertion professionnelle."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                title="Diplôme reconnu"
                testimonial="Le diplôme obtenu chez ITC Santé est reconnu par le Ministère de la Santé, ce qui m’a ouvert de nombreuses portes."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                title="Vie étudiante dynamique"
                testimonial="J’ai adoré participer aux séminaires et ateliers gratuits proposés par ITC Santé. Une expérience enrichissante et conviviale !"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;