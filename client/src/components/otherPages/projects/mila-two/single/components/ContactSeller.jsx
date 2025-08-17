import React from "react";

export default function ContactSeller() {
  return (
    <>
      {" "}
      <h5 className="title fw-6">Contact Us</h5>
      <div className="box-avatar">
        <div className="avatar avt-100 round">
          <img
            alt="avatar"
            src="/images/avatar/avt-lg-single.jpg"
            width={100}
            height={100}
          />
        </div>
        <div className="info">
          <h6 className="name">Mila Residence</h6>
          <ul className="list">
            <li className="d-flex align-items-center gap-4 text-variant-1">
              <i className="icon icon-phone" />
              +961 70 89 81 81
            </li>
            <li className="d-flex align-items-center gap-4 text-variant-1">
              <i className="icon icon-mail" />
              info@milaresidence.com
            </li>
          </ul>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="ip-group">
          <input type="text" placeholder="Name" className="form-control" />
        </div>
        <div className="ip-group">
          <input type="text" placeholder="Phone" className="form-control" />
        </div>
        <div className="ip-group">
          <input type="text" placeholder="Email" className="form-control" />
        </div>
        <div className="ip-group">
          <textarea
            id="comment-message"
            name="message"
            rows={4}
            tabIndex={4}
            placeholder="Message"
            aria-required="true"
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="tf-btn btn-view primary hover-btn-view w-100"
        >
          Contact Us
          <span className="icon icon-arrow-right2" />
        </button>
      </form>
    </>
  );
}
