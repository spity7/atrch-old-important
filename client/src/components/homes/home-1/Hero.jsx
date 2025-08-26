import FilterTab from "@/components/common/FilterTab";
import WordEffect1 from "@/components/common/WordEffect1";

export default function Hero() {
  return (
    <section className="flat-slider home-1">
      <div className="container relative">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-content">
              <div className="heading text-center">
                <div className="title-large text-white animationtext slide">
                  Shape Your Architectural Identity
                  {/* <WordEffect1 string={["Dream Home", "Perfect Home"]} /> */}
                </div>
                <p
                  className="subtitle text-white body-2 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  “We make it simple to bring your vision to life — transforming
                  ideas into spaces where design meets quality, and every detail
                  is crafted to inspire, endure, and tell a story that lasts.”
                </p>
              </div>
              {/* <FilterTab /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </section>
  );
}
