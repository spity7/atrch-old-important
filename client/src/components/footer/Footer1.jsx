import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";
import { footerSections } from "@/data/footer";
export default function Footer1() {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();

          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className="footer">
      <div className="inner-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo mb-30">
                <Link to={`/`}>
                  <img
                    alt="logo"
                    width={196}
                    height={48}
                    src="/images/logo/Logo white - atrch.png"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-cl-1">
                <p className="text-variant-2">
                  Timeless Elegance, Where Minimalism Intersects With
                  Extravagance.
                </p>
                <ul className="mt-12">
                  <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon icon-mapPinLine fs-20 text-variant-2" />
                    <p className="text-white">Tyre, Lebanon</p>
                  </li>
                  <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon icon-phone2 fs-20 text-variant-2" />
                    <a
                      href="https://wa.me/96171601751"
                      className="text-white caption-1"
                      target="_blank"
                    >
                      +961 71 601 751
                    </a>
                  </li>
                  <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon icon-mail fs-20 text-variant-2" />
                    <p className="text-white">info@milaresidence.com</p>
                  </li>
                </ul>
              </div>
            </div>
            {footerSections.map((section, index) => (
              <div key={index} className="col-lg-2 col-md-6">
                <div className={`footer-cl-${index + 2} footer-col-block`}>
                  <div className="fw-7 text-white footer-heading-mobile">
                    {section.heading}
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="mt-10 navigation-menu-footer">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.href}
                            className="caption-1 text-variant-2"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="content-footer-bottom">
            <div className="copyright">
              © 2024 Copyrights by Buytly. All Rights Reserved
            </div>
            <div className="wd-social">
              <span>Follow Us:</span>
              <ul className="list-social d-flex align-items-center">
                <li>
                  <a
                    href="https://www.instagram.com/mila.residence/?igsh=N2FueTB5bzJtdnRm#"
                    target="_blank"
                    className="box-icon w-40 social"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99812 4.66567C5.71277 4.66567 4.66383 5.71463 4.66383 7C4.66383 8.28537 5.71277 9.33433 6.99812 9.33433C8.28346 9.33433 9.3324 8.28537 9.3324 7C9.3324 5.71463 8.28346 4.66567 6.99812 4.66567ZM13.9992 7C13.9992 6.03335 14.008 5.07545 13.9537 4.11055C13.8994 2.98979 13.6437 1.99512 12.8242 1.17556C12.0029 0.35426 11.01 0.100338 9.88927 0.0460516C8.92263 -0.00823506 7.96475 0.000520879 6.99987 0.000520879C6.03323 0.000520879 5.07536 -0.00823506 4.11047 0.0460516C2.98973 0.100338 1.99508 0.356011 1.17554 1.17556C0.354253 1.99687 0.100336 2.98979 0.0460508 4.11055C-0.00823491 5.0772 0.00052087 6.0351 0.00052087 7C0.00052087 7.9649 -0.00823491 8.92455 0.0460508 9.88945C0.100336 11.0102 0.356004 12.0049 1.17554 12.8244C1.99683 13.6457 2.98973 13.8997 4.11047 13.9539C5.07711 14.0082 6.03499 13.9995 6.99987 13.9995C7.9665 13.9995 8.92438 14.0082 9.88927 13.9539C11.01 13.8997 12.0047 13.644 12.8242 12.8244C13.6455 12.0031 13.8994 11.0102 13.9537 9.88945C14.0097 8.92455 13.9992 7.96665 13.9992 7ZM6.99812 10.5917C5.01056 10.5917 3.40651 8.98759 3.40651 7C3.40651 5.01241 5.01056 3.40832 6.99812 3.40832C8.98567 3.40832 10.5897 5.01241 10.5897 7C10.5897 8.98759 8.98567 10.5917 6.99812 10.5917ZM10.7368 4.10004C10.2728 4.10004 9.89802 3.72529 9.89802 3.26122C9.89802 2.79716 10.2728 2.42241 10.7368 2.42241C11.2009 2.42241 11.5756 2.79716 11.5756 3.26122C11.5758 3.37142 11.5542 3.48056 11.5121 3.58239C11.47 3.68422 11.4082 3.77675 11.3303 3.85467C11.2523 3.93258 11.1598 3.99437 11.058 4.03647C10.9562 4.07858 10.847 4.10018 10.7368 4.10004Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="menu-bottom">
              <li>
                <Link to={`/our-service`}>Terms Of Services</Link>
              </li>
              <li>
                <Link to={`/pricing`}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={`/contact`}>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
