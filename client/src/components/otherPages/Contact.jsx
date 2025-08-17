import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
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
            <div className="col-lg-7">
              <div className="contact-content">
                <h4>Drop Us A Line</h4>
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
                        placeholder="Phone Number"
                        name="phone"
                        id="phone"
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
            <div className="col-lg-5">
              <div className="contact-info">
                <div className="content-left img-animation wow">
                  <img
                    className="lazyload"
                    alt=""
                    src="/images/banner/image-07.jpg"
                    width={945}
                    height={657}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div
          id="map-contact"
          className="map-contact"
          data-map-zoom={16}
          data-map-scroll="true"
        >
          <ContactMap />
        </div>
      </section>
    </>
  );
}
