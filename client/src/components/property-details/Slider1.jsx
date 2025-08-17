import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { Gallery, Item } from "react-photoswipe-gallery";
const propertyImages = [
  {
    src: "/images/banner/BR Mila - Scene 06.0.jpg",
    alt: "img-property",
    width: 627,
    height: 694,
  },
  {
    src: "/images/banner/BR Mila - Scene 07.0.jpg",
    alt: "img-property",
    width: 627,
    height: 694,
  },
  {
    src: "/images/banner/BR Mila - Scene 08.0.jpg",
    alt: "img-property",
    width: 628,
    height: 694,
  },
  {
    src: "/images/banner/BR Mila - Scene 09.0.jpg",
    alt: "img-property",
    width: 627,
    height: 694,
  },
];

export default function Slider1() {
  return (
    <Gallery>
      <section className="flat-slider-detail-v1 px-10 mt-30 mb-30">
        <Swiper
          className="swiper tf-sw-location"
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            1200: {
              slidesPerView: 3, // for tablet
              spaceBetween: 10, // for space-lg
            },
            640: {
              slidesPerView: 2, // for mobile-sm
              spaceBetween: 10, // for space-md
            },
            0: {
              slidesPerView: 1, // for mobile
              spaceBetween: 10, // for space
            },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spb18" }}
        >
          {propertyImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <a
                    onClick={open}
                    data-fancybox="gallery"
                    className="box-img-detail d-block"
                  >
                    <img
                      ref={ref}
                      alt={image.alt}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                    />
                  </a>
                )}
              </Item>
            </SwiperSlide>
          ))}
          <div className="sw-pagination spb18 sw-pagination-location text-center" />
        </Swiper>
      </section>
    </Gallery>
  );
}
