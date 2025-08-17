import { blogPosts } from "@/data/blogs";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="flat-section bg-primary-new">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Latest New</div>
          <h3 className="title mt-4">From Our Blog</h3>
        </div>
        <Swiper
          className="swiper tf-sw-latest wow fadeInUp"
          data-wow-delay=".2s"
          spaceBetween={15} // equivalent to data-space
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15, // equivalent to data-space-md and data-space-mobile
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15, // equivalent to data-space-mobile-sm
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15, // tablet setting
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30, // desktop (equivalent to data-space-lg)
            },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spb7" }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Link
                to={`/blog-detail/${post.id}`}
                className="flat-blog-item hover-img"
              >
                <div className="img-style">
                  <img
                    className="lazyload"
                    data-src={post.imgSrc}
                    alt={post.alt}
                    src={post.imgSrc}
                    width={615}
                    height={405}
                  />
                  <span className="date-post">{post.date}</span>
                </div>
                <div className="content-box">
                  <div className="post-author">
                    <span className="fw-6">{post.author}</span>
                    <span>{post.category}</span>
                  </div>
                  <h5 className="title link">{post.title}</h5>
                  <p className="description">{post.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          <div className="sw-pagination spb7 sw-pagination-latest text-center" />
        </Swiper>
      </div>
    </section>
  );
}
