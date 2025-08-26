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
            data-src="/images/banner/VZ - cam009.1.jpg"
            alt=""
            src="/images/banner/VZ - cam009.1.jpg"
            width={950}
            height={908}
          />
        </div>
        <div className="content-right">
          <div className="box-title wow fadeInUp">
            <div className="text-subtitle text-primary">Get to know us</div>
            <h3 className="title mt-4">
              Innovative & Innovative Architectural Solutions
            </h3>
            <p className="desc text-variant-1 fs-6">
              “We create spaces that go beyond aesthetics—places that serve
              people, inspire communities, and stand the test of time. From
              concept development and detailed 2D plans to advanced 3D
              visualizations, we transform ideas into well-crafted architectural
              solutions that enhance everyday living while respecting both
              environment and context.”
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
