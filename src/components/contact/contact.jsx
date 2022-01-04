import "./contact.css";
import EmailImg from "../../assets/img/email.svg";
import GithubImg from "../../assets/img/github.svg";
import LinkedIn from "../../assets/img/linkedin.svg";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../data/context";
import { useContext } from "react";

export const Contact = () => {
  const formRef = useRef();
  const themeCtx = useContext(ThemeContext);
  const darkMode = themeCtx.state.darkMode;
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  // eslint-disable-next-line
  const [done, setDone] = useState(false);
  const EMAIL_TEMPLATE_ID = process.env.EMAIL_TEMPLATE;
  const USER_ID = process.env.USER_ID;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationResponse = isFormValidated(formData);
    if (validationResponse.Ok) {
      emailjs
        .sendForm(
          "portfolio-mail",
          EMAIL_TEMPLATE_ID,
          formRef.current,
          USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert(validationResponse.errorMessage);
    }
  };
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const isFormValidated = (data) => {
    console.log(data);
    let errorMessage = "";
    let Ok = false;
    if (!validateEmail(data.user_email)) {
      errorMessage = "Please enter a valid email.";
    } else {
      // eslint-disable-next-line
      Ok = true;
    }
    return {
      errorMessage: errorMessage,
      Ok: Ok,
    };
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-info">
            <div className="c-title">Connect with me !</div>
            <div className="c-info-item">
              <img src={EmailImg} alt="" className="c-icon email" />
              kumaraditya1096@outlook.com
            </div>
            <div className="c-info-item">
              <img src={GithubImg} alt="" className="c-icon github" />
              https://github.com/aditya109
            </div>
            <div className="c-info-item">
              <img src={LinkedIn} alt="" className="c-icon linkedin" />
              https://www.linkedin.com/in/aditya109/
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> Like what you see ? </b> Feel free to reach out !
          </p>
          <form name="contact-form" ref={formRef} onSubmit={onSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              autoComplete="off"
              type="text"
              placeholder="Name"
              name="user_name"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              autoComplete="off"
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              autoComplete="off"
              type="text"
              placeholder="Email"
              name="user_email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id=""
              placeholder="Message"
              rows="5"
            ></textarea>
            <button className="submit-btn">Submit</button>
            {done && "Thank you ...."}
          </form>
        </div>
      </div>
    </div>
  );
};
