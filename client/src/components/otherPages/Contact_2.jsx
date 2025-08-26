import { useState } from "react";
import ContactMap from "./ContactMap";
import axios from "axios";
import { useGlobalContext } from "@/context/globalContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { contactUs } = useGlobalContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await contactUs(formData);
      alert(response.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flat-section flat-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-content">
                <h4>Get in touch with us</h4>
                <p className="body-2 text-variant-1">
                  Feel free to connect with us through our online channels for
                  updates, news, and more.
                </p>
                <form onSubmit={handleSubmit} className="form-contact">
                  <div className="box grid-2">
                    <fieldset>
                      <label htmlFor="name">Full Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="email">Email Address:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="box grid-2">
                    <fieldset>
                      <label htmlFor="phone">Phone Number:</label>
                      <input
                        type="text"
                        className="form-control style-1"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="subject">Subject:</label>
                      <input
                        type="text"
                        className="form-control style-1"
                        placeholder="Subject"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <fieldset>
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                      name="message"
                      className="form-control"
                      cols={30}
                      rows={10}
                      placeholder="Message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                  <div className="send-wrap">
                    <button
                      className="tf-btn primary size-1"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
                <h4>Contact Us</h4>
                <ul>
                  <li className="box">
                    <h6 className="title">Address:</h6>
                    <p className="text-variant-1">Tyre / Lebanon</p>
                  </li>
                  <li className="box">
                    <h6 className="title">Infomation:</h6>
                    <p className="text-variant-1">
                      +961 71 601 751 <br />
                      info@milaresidence.com
                    </p>
                  </li>
                  <li className="box">
                    <div className="title">Opentime:</div>
                    <p className="text-variant-1">
                      Monay - Friday: 08:00 - 20:00 <br />
                      Saturday - Sunday: 10:00 - 18:00
                    </p>
                  </li>
                  <li className="box">
                    <div className="title">Follow Us:</div>
                    <ul className="box-social">
                      <li>
                        <a
                          href="https://www.instagram.com/mila.residence/?igsh=N2FueTB5bzJtdnRm#"
                          target="_blank"
                          className="item"
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.00245 4.38427C6.4484 4.38427 4.38828 6.44438 4.38828 8.99844C4.38828 11.5525 6.4484 13.6126 9.00245 13.6126C11.5565 13.6126 13.6166 11.5525 13.6166 8.99844C13.6166 6.44438 11.5565 4.38427 9.00245 4.38427ZM9.00245 11.9983C7.35195 11.9983 6.00264 10.653 6.00264 8.99844C6.00264 7.34392 7.34794 5.99862 9.00245 5.99862C10.657 5.99862 12.0023 7.34392 12.0023 8.99844C12.0023 10.653 10.653 11.9983 9.00245 11.9983ZM14.8816 4.19552C14.8816 4.79388 14.3997 5.27176 13.8054 5.27176C13.207 5.27176 12.7291 4.78986 12.7291 4.19552C12.7291 3.60118 13.211 3.11928 13.8054 3.11928C14.3997 3.11928 14.8816 3.60118 14.8816 4.19552ZM17.9376 5.28782C17.8694 3.84615 17.5401 2.56912 16.4839 1.51697C15.4318 0.46483 14.1547 0.135534 12.7131 0.0632491C11.2272 -0.021083 6.77368 -0.021083 5.28782 0.0632491C3.85016 0.131518 2.57313 0.460815 1.51697 1.51296C0.460815 2.5651 0.135534 3.84213 0.0632491 5.28381C-0.021083 6.76966 -0.021083 11.2232 0.0632491 12.7091C0.131518 14.1507 0.460815 15.4278 1.51697 16.4799C2.57313 17.532 3.84615 17.8613 5.28782 17.9336C6.77368 18.018 11.2272 18.018 12.7131 17.9336C14.1547 17.8654 15.4318 17.5361 16.4839 16.4799C17.5361 15.4278 17.8654 14.1507 17.9376 12.7091C18.022 11.2232 18.022 6.77368 17.9376 5.28782ZM16.0181 14.3033C15.7048 15.0904 15.0985 15.6968 14.3073 16.0141C13.1227 16.4839 10.3116 16.3755 9.00245 16.3755C7.6933 16.3755 4.87821 16.4799 3.69756 16.0141C2.91046 15.7008 2.30407 15.0944 1.98682 14.3033C1.51697 13.1187 1.6254 10.3076 1.6254 8.99844C1.6254 7.68928 1.52099 4.8742 1.98682 3.69355C2.30006 2.90645 2.90645 2.30006 3.69756 1.98281C4.88223 1.51296 7.6933 1.62139 9.00245 1.62139C10.3116 1.62139 13.1267 1.51697 14.3073 1.98281C15.0944 2.29604 15.7008 2.90243 16.0181 3.69355C16.4879 4.87821 16.3795 7.68928 16.3795 8.99844C16.3795 10.3076 16.4879 13.1227 16.0181 14.3033Z"
                              fill="#161E2D"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div
          id="map-contact"
          className="map-contact"
          data-map-zoom={16}
          data-map-scroll="true"
        >
          <ContactMap />
        </div>
      </section> */}
    </>
  );
}
