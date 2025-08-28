import { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
export default function Header1({
  parentClass = "main-header header-fixed fixed-header",
}) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`${parentClass} ${isFixed ? "is-fixed" : ""}`}
    >
      {/* Header Lower */}
      <div className="header-lower">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-header">
              <div className="inner-header-left">
                <div className="logo-box flex">
                  <div className="logo">
                    <Link to={`/`}>
                      <img
                        alt="logo"
                        width={100}
                        className="logo-1"
                        height={48}
                        src="/images/logo/Logo Black - atrch.png"
                      />
                      <img
                        alt="logo"
                        width={166}
                        className="logo-2"
                        height={48}
                        src="/images/logo/logo@2x-white.png"
                      />
                    </Link>
                  </div>
                </div>
                <div className="nav-outer flex align-center">
                  {/* Main Menu */}
                  <nav className="main-menu show navbar-expand-md">
                    <div
                      className="navbar-collapse collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <Nav />
                      </ul>
                    </div>
                  </nav>
                  {/* Main Menu End*/}
                </div>
              </div>
              <div className="inner-header-right header-account">
                {/* <a
                  href="#modalLogin"
                  data-bs-toggle="modal"
                  className="tf-btn btn-line btn-login"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1251 5C13.1251 5.8288 12.7959 6.62366 12.2099 7.20971C11.6238 7.79576 10.8289 8.125 10.0001 8.125C9.17134 8.125 8.37649 7.79576 7.79043 7.20971C7.20438 6.62366 6.87514 5.8288 6.87514 5C6.87514 4.1712 7.20438 3.37634 7.79043 2.79029C8.37649 2.20424 9.17134 1.875 10.0001 1.875C10.8289 1.875 11.6238 2.20424 12.2099 2.79029C12.7959 3.37634 13.1251 4.1712 13.1251 5ZM3.75098 16.765C3.77776 15.1253 4.44792 13.5618 5.61696 12.4117C6.78599 11.2616 8.36022 10.6171 10.0001 10.6171C11.6401 10.6171 13.2143 11.2616 14.3833 12.4117C15.5524 13.5618 16.2225 15.1253 16.2493 16.765C14.2888 17.664 12.1569 18.1279 10.0001 18.125C7.77014 18.125 5.65348 17.6383 3.75098 16.765Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Sign in
                </a> */}
                <div className="flat-bt-top">
                  <Link
                    className="tf-btn primary"
                    to="https://wa.me/96171601751"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      // style={{ fill: "white" }}
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div
                className="mobile-nav-toggler mobile-button"
                onClick={() => {
                  document.body.classList.add("mobile-menu-visible");
                }}
              >
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Lower */}
      {/* Mobile Menu  */}
      <div
        className="close-btn"
        onClick={() => {
          document.body.classList.remove("mobile-menu-visible");
        }}
      >
        <span className="icon flaticon-cancel-1" />
      </div>
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to={`/`}>
              <img
                alt="nav-logo"
                width={100}
                height={48}
                src="/images/logo/Logo-Mila-color.png"
              />
            </Link>
          </div>
          <div className="bottom-canvas">
            {/* <div className="login-box flex align-center">
              <a href="#modalLogin" data-bs-toggle="modal">
                Login
              </a>
              <span>/</span>
              <a href="#modalRegister" data-bs-toggle="modal">
                Register
              </a>
            </div> */}
            <div className="menu-outer">
              <MobileNav />
            </div>
            <div className="mobi-icon-box">
              <div className="box d-flex align-items-center">
                <span className="icon icon-phone2" />
                <Link to="https://wa.me/96170898181" target="_blank">
                  <div>+961 70 89 81 81</div>
                </Link>
              </div>
              <div className="box d-flex align-items-center">
                <span className="icon icon-mail" />
                <div>info@milaresidence.com</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}
