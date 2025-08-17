import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "@/context/globalContext";
import { useAtom } from "jotai";
import authScreenAtom from "@/atoms/authAtom";

export default function Register() {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "User",
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
  });

  const { handleSignup } = useGlobalContext();
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [, setAuthScreen] = useAtom(authScreenAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexNumber = /[0-9]/;
    const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    const length = password.length >= 8;
    const upperCase = regexUpperCase.test(password);
    const lowerCase = regexLowerCase.test(password);
    const number = regexNumber.test(password);
    const specialChar = regexSpecialChar.test(password);

    setPasswordCriteria({
      length,
      upperCase,
      lowerCase,
      number,
      specialChar,
    });

    setValidPassword(length && upperCase && lowerCase && number && specialChar);
  };

  useEffect(() => {
    setPasswordMatch(
      inputs.password === inputs.confirmPassword ||
        inputs.confirmPassword === ""
    );
  }, [inputs.password, inputs.confirmPassword]);

  useEffect(() => {
    const allFields = Object.keys(inputs).every(
      (key) => inputs[key] !== null && inputs[key] !== ""
    );
    setAllFieldsFilled(allFields);
  }, [inputs]);

  const handleSubmit = async () => {
    try {
      await handleSignup(
        inputs.firstname,
        inputs.lastname,
        inputs.username,
        inputs.email,
        inputs.password,
        inputs.role
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="modal modal-account fade" id="modalRegister">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="flat-account">
            <div className="banner-account">
              <img
                alt="banner"
                src="/images/banner/BR Mila - Scene 09.0.jpg"
                width={570}
                height={1263}
              />
            </div>
            <form className="form-account">
              <div className="title-box">
                <h4>Register</h4>
                <a href="/">
                  <span
                    className="close-modal icon-close2"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
              <div className="box">
                <fieldset className="box-fieldset">
                  <label htmlFor="name">First Name</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      value={inputs.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="name">Last Name</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      value={inputs.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="name">Username</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={inputs.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="email">E-Mail</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3125 5.0625V12.9375C16.3125 13.3851 16.1347 13.8143 15.8182 14.1307C15.5018 14.4472 15.0726 14.625 14.625 14.625H3.375C2.92745 14.625 2.49822 14.4472 2.18176 14.1307C1.86529 13.8143 1.6875 13.3851 1.6875 12.9375V5.0625M16.3125 5.0625C16.3125 4.61495 16.1347 4.18573 15.8182 3.86926C15.5018 3.55279 15.0726 3.375 14.625 3.375H3.375C2.92745 3.375 2.49822 3.55279 2.18176 3.86926C1.86529 4.18573 1.6875 4.61495 1.6875 5.0625M16.3125 5.0625V5.24475C16.3125 5.53286 16.2388 5.81618 16.0983 6.06772C15.9578 6.31926 15.7553 6.53065 15.51 6.68175L9.885 10.143C9.61891 10.3069 9.31252 10.3937 9 10.3937C8.68748 10.3937 8.38109 10.3069 8.115 10.143L2.49 6.6825C2.24469 6.5314 2.04215 6.32001 1.90168 6.06847C1.7612 5.81693 1.68747 5.53361 1.6875 5.2455V5.0625"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-Mail"
                      name="email"
                      value={inputs.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="pass">Password</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      value={inputs.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </fieldset>
                <PasswordCriteria>
                  <Criteria>
                    <input
                      type="radio"
                      readOnly
                      checked={passwordCriteria.length}
                    />
                    <span>At least 8 characters</span>
                  </Criteria>
                  <Criteria>
                    <input
                      type="radio"
                      readOnly
                      checked={passwordCriteria.upperCase}
                    />
                    <span>At least one uppercase letter</span>
                  </Criteria>
                  <Criteria>
                    <input
                      type="radio"
                      readOnly
                      checked={passwordCriteria.lowerCase}
                    />
                    <span>At least one lowercase letter</span>
                  </Criteria>
                  <Criteria>
                    <input
                      type="radio"
                      readOnly
                      checked={passwordCriteria.number}
                    />
                    <span>At least one number</span>
                  </Criteria>
                  <Criteria>
                    <input
                      type="radio"
                      readOnly
                      checked={passwordCriteria.specialChar}
                    />
                    <span>At least one special character</span>
                  </Criteria>
                </PasswordCriteria>
                <fieldset className="box-fieldset">
                  <label htmlFor="confirm">Confirm password</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      value={inputs.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {!passwordMatch && (
                    <ErrorMessage>Passwords do not match!</ErrorMessage>
                  )}
                </fieldset>
              </div>
              <div className="box box-btn">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={
                    !validPassword || !passwordMatch || !allFieldsFilled
                  }
                  className="tf-btn primary w-100"
                >
                  Sign Up
                </button>
                <div className="text text-center">
                  Already have an account?{" "}
                  <a
                    onClick={() => setAuthScreen("login")}
                    // data-bs-toggle="modal"
                    className="text-primary"
                  >
                    Sign In
                  </a>
                </div>
              </div>
              {/* <p className="box text-center caption-2">or login with</p>
              <div className="group-btn">
                <a href="#" className="btn-social">
                  <img
                    alt="img"
                    src="/images/logo/google.jpg"
                    width={37}
                    height={36}
                  />
                  Google
                </a>
                <a href="#" className="btn-social">
                  <img
                    alt="img"
                    src="/images/logo/fb.jpg"
                    width={31}
                    height={30}
                  />
                  Facebook
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const PasswordCriteria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 10px;
`;

const Criteria = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  input {
    margin-right: 10px;
  }

  span {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 15px;
  margin-top: 5px;
`;
