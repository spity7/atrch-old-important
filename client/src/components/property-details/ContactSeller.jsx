import React from "react";

export default function ContactSeller() {
  return (
    <>
      {" "}
      <h5 className="title fw-6">Contact Sellers</h5>
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
          <h6 className="name">Shara Conner</h6>
          <ul className="list">
            <li className="d-flex align-items-center gap-4 text-variant-1">
              <i className="icon icon-phone" />
              1-333-345-6868
            </li>
            <li className="d-flex align-items-center gap-4 text-variant-1">
              <i className="icon icon-mail" />
              themesflat@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="ip-group">
          <input type="text" placeholder="Jony Dane" className="form-control" />
        </div>
        <div className="ip-group">
          <input
            type="text"
            placeholder="ex 0123456789"
            className="form-control"
          />
        </div>
        <div className="ip-group">
          <input
            type="text"
            placeholder="themesflat@gmail.com"
            className="form-control"
          />
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
          Find Properties
          <span className="icon icon-arrow-right2" />
        </button>
      </form>
    </>
  );
}
