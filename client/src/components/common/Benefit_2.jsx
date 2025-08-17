import React from "react";
import { Link } from "react-router-dom";

import { benefits } from "@/data/benefits";
export default function Benefit() {
  return (
    <section className="mx-5 bg-primary-new radius-30">
      <div className="flat-img-with-text">
        <div className="content-left img-animation wow my-3 mx-1">
          <img
            className="lazyload"
            data-src="/images/banner/BR Mila - Scene 08.0.jpg"
            alt=""
            src="/images/banner/BR Mila - Scene 08.0.jpg"
            width={950}
            height={908}
          />
        </div>
        <div className="content-right">
          <div className="box-title wow fadeInUp">
            <div className="text-subtitle text-primary">Get to know us</div>
            <h3 className="title mt-4">Modern & luxury living complexes</h3>
            <p className="desc text-variant-1 fs-6">
              Lifestyle apartments are designed to offer a complete living
              experience that goes beyond just a place to sleep. These modern
              apartments often come fully furnished and boast amenities like
              swimming pools, gyms, and restaurant. Residents can relax in
              beautifully landscaped gardens, entertain guests in rooftop
              lounges with stunning city views, and enjoy the peace of mind that
              comes with 24-hour security and on-site property management.
            </p>
          </div>
          <div className="text-center">
            <Link
              to={`/lifestyle`}
              className="tf-btn btn-view primary size-1 hover-btn-view"
            >
              ABOUT US
              <span className="icon icon-arrow-right2" />
            </Link>
          </div>
          {/* <div className="flat-service wow fadeInUp" data-wow-delay=".2s">
            {benefits.map((benefit, index) => (
              <a href="#" key={index} className="box-benefit hover-btn-view">
                <div className="icon-box">
                  <span className={`icon ${benefit.iconClass}`} />
                </div>
                <div className="content">
                  <h5 className="title">{benefit.title}</h5>
                  <p className="description">{benefit.description}</p>
                </div>
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
