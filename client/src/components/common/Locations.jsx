import { Swiper, SwiperSlide } from "swiper/react";
import { locations } from "@/data/locations";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Locations({ parentClass = "flat-location px-10" }) {
  return (
    <section className={parentClass}>
      <div className="box-title text-center wow fadeInUp">
        <div className="text-subtitle text-primary">Explore Cities</div>
        <h3 className="mt-4 title">Our Location For You</h3>
      </div>
      <div className="wow fadeInUp" data-wow-delay=".2s">
        <Swiper
          className="swiper tf-sw-location"
          spaceBetween={8}
          slidesPerView={6}
          breakpoints={{
            1600: { slidesPerView: 6, spaceBetween: 8 },
            1224: { slidesPerView: 4, spaceBetween: 8 },
            1100: { slidesPerView: 3, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 8 },
            500: { slidesPerView: 2, spaceBetween: 8 },

            320: { slidesPerView: 1, spaceBetween: 8 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spd4" }}
        >
          {locations.map((location, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Link to={`/topmap-grid`} className="box-location">
                <div className="image img-style">
                  <img
                    className="lazyload"
                    data-src={location.imgSrc}
                    alt={location.alt}
                    src={location.imgSrc}
                    width={465}
                    height={578}
                  />
                </div>
                <div className="content">
                  <div className="inner-left">
                    <span className="sub-title fw-6">321 Property</span>
                    <h6 className="title text-line-clamp-1 link">
                      {location.title}
                    </h6>
                  </div>
                  <button className="box-icon line w-44 round">
                    <i className="icon icon-arrow-right2" />
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="sw-pagination spd4 spd1 sw-pagination-location text-center" />
        </Swiper>
      </div>
    </section>
  );
}
