import React from "react";

import { benefits } from "@/data/benefits";
export default function Benefits() {
  return (
    <section className="mx-5 bg-primary-new radius-30">
      <div className="flat-img-with-text">
        <div className="content-left img-animation wow">
          <img
            className="lazyload"
            data-src="/images/banner/location-mila.jpg"
            alt=""
            width={950}
            height={908}
            src="/images/banner/location-mila.jpg"
          />
        </div>
        <div className="content-right">
          <div className="box-title wow fadeInUp">
            <div className="text-subtitle text-primary">Our Location</div>
            <h3 className="title mt-4">Tyre - Lebanon</h3>
            <h5 className="mt-20 text-muted">
              Conveniently located within walking distance of shops,
              restaurants, and entertainment options, Mila Residence offers
              residents easy access to everything they need for a fulfilling
              lifestyle. With public transportation options nearby, commuting to
              work or exploring the city is a breeze, making Mila Residence the
              perfect choice for those seeking a seamless blend of urban
              convenience and suburban tranquility.
            </h5>
          </div>
          {/* <div className="flat-service wow fadeInUp" data-wow-delay=".2s">
            {benefits.map((benefit) => (
              <a
                key={benefit.id}
                href="#"
                className="box-benefit hover-btn-view"
              >
                <div className="icon-box">
                  <span className={`icon ${benefit.icon}`} />
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
