import React from "react";
import "./footerstyle.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { responsiveFontSizes } from "@mui/material";

const myStyle = () => {
  const myStyle = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
};

const Footer = () => {
  return (
    <>
      <section className="footer-five">
        <div
          style={{
            backgroundImage: "url('../assests/footer images/bgf.png')",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <a href="/home" className="logo">
            <img src="../assests/footer images/gdsc_logo.png" alt="Logo" style={{scale: 1.5}}/>
          </a>
          <p className="text-center" style={{fontSize : "2.4rem",}}>
            <b>Google Developer Student Club</b>
            <br />
            <b style={{fontSize : "1.8rem",}}>Tezpur University</b>
          </p>
          <br />
          <br/>
          <br/>
          <p style={{fontSize : "1rem",}}>Get Connected</p>
          <div className="input-icons">
            <input className="input icon-rtl" placeholder="Enter Email" />
          </div>
          <div className="social text-center mt-60">
          <br />
          <br />
            <ul>
                <span>
                  <b style={{fontSize : "2rem",}}>Follow Us</b>
                </span>
              <br />
              <li>
                <div>
                  <a href="https://instagram.com/gdsc_tezu?igshid=MzRlODBiNWFlZA==">
                    <img src="../assests/footer images/insta.png"></img>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a
                    href="https://www.linkedin.com/company/gdsc-tezpur-university/mycompany/"
                    target="_blank">
                      <img src="../assests/footer images/linkedin.png"></img>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://github.com/afk-ankit/gdsc-tu" target="_blank">
                  <img src="../assests/footer images/github1.png"></img>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright text-center">
                  <p className="text">
                    Copyright © 2023 GDSC TU. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
