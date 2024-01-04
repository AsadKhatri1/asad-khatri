import React, { useRef, useState } from "react";
import consult from "../images/consult.jpg";

import emailjs from "@emailjs/browser";
const ConsultForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const form = useRef();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);

    emailjs
      .sendForm(
        "service_q8ux0rk",
        "template_cw4upuu",
        form.current,
        "WxMQbFZiwL8LIJap9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form has been successfully submitted")
        },
        (error) => {
          console.log(error.text);
        }
      );

    setData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };
  return (
    <div
      className="vw-100 d-flex flex-column align-items-center justify-content-center"
      style={{ backgroundColor: "#F3F3F3", minHeight: "90vh" }}
    >
      <div
        className="container row border"
        style={{
          backgroundColor: "white",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "0px",
          borderRadius: "12px",
        }}
      >
        <div
          className="col-lg-6 col-12 d-flex flex-column align-items-start justify-content-start p-5"
          style={{
            backgroundColor: "#14222f",
            color: "white",
            borderRadius: "12px 0px 0px 12px",
          }}
        >
          <h4
            style={{
              fontFamily: "Fira Code, monospace",
              fontSize: "22px",
              fontWeight: "900",
            }}
          >
            Book A Meeting!
          </h4>
          <h6>
            Schedule time to review the engineers who can help your team focus
            on critical features.
          </h6>
          <div>
            <img
              src={consult}
              className="rounded"
              alt="consultants"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center p-5">
          <div
            style={{ width: "100%" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <form
            ref={form}
              action="post"
              onSubmit={submitHandler}
              style={{ width: "100%" }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Full Name"
                style={{
                  textIndent: "10px",
                  border: "none",
                  width: "80%",
                  backgroundColor: "#F3F3F3",
                  borderRadius: "12px",
                  padding: "12px 6px",
                  margin: "15px 0px",
                }}
                onChange={changeHandler}
              />
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                style={{
                  textIndent: "10px",
                  border: "none",
                  width: "80%",
                  backgroundColor: "#F3F3F3",
                  borderRadius: "12px",
                  padding: "12px 6px",
                  margin: "15px 0px",
                }}
                onChange={changeHandler}
              />
              <input
                type="phone"
                name="phone"
                value={data.phone}
                placeholder="phone"
                style={{
                  textIndent: "10px",
                  border: "none",
                  width: "80%",
                  backgroundColor: "#F3F3F3",
                  borderRadius: "12px",
                  padding: "12px 6px",
                  margin: "15px 0px",
                }}
                onChange={changeHandler}
              />
              <input
                type="text"
                name="company"
                value={data.company}
                placeholder="Company Name"
                style={{
                  textIndent: "10px",
                  border: "none",
                  width: "80%",
                  backgroundColor: "#F3F3F3",
                  borderRadius: "12px",
                  padding: "12px 6px",
                  margin: "15px 0px",
                }}
                onChange={changeHandler}
              />
              <textarea
                rows="4"
                cols="50"
                name="message"
                value={data.message}
                placeholder="Message"
                style={{
                  textIndent: "10px",
                  border: "none",
                  width: "80%",
                  backgroundColor: "#F3F3F3",
                  borderRadius: "12px",
                  padding: "12px 6px",
                  margin: "15px 0px",
                }}
                onChange={changeHandler}
              />

              <button
                type="submit"
                className="btn my-3 px-5 rounded-lg"
                style={{
                  width: "80%",
                  backgroundColor: "#14222f",
                  color: "white",
                  fontFamily: "Fira Code, monospace",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultForm;
