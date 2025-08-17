import React from "react";

import { benefits } from "@/data/benefits";
export default function Benefit() {
  return (
    <section className="mx-5 bg-primary-new radius-30">
      <div className="flat-img-with-text">
        <div className="content-left img-animation wow">
          <img
            className="lazyload"
            data-src="/images/banner/img-w-text1.jpg"
            alt=""
            src="/images/banner/img-w-text1.jpg"
            width={950}
            height={908}
          />
        </div>
        <div className="content-right">
          <div className="box-title wow fadeInUp">
            <div className="text-subtitle text-primary">Our Benifit</div>
            <h3 className="title mt-4">Why Choose HomeLengo</h3>
            <p className="desc text-variant-1">
              Our seasoned team excels in real estate with years of successful
              market <br />
              navigation, offering informed decisions and optimal results.
            </p>
          </div>
          <div className="flat-service wow fadeInUp" data-wow-delay=".2s">
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
          </div>
        </div>
      </div>
    </section>
  );
}
