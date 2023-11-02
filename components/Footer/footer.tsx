import React from "react";
import "./footerstyle.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";


const Footer = () => {
  return (
    <>

        <section className="footer-five">

          <div className="topFooter">
            <div className="line"><hr /></div>
            <div className="middle">
              <a href="/" className="logo" >
                <img src="../assests/footer/gdsc_logo.png" alt="Logo" style={{ scale: 1.5 }} />
              </a>
            </div>


          </div>
          <div
            style={{
              backgroundImage: "url('https://www.gdsc-uit.org/_next/static/image/src/assets/images/decor-light.ad6149bd9ae88855a8048f5ca7f8284b.png')",
              height: "30vh",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
            }}
          >
            <p className="text-center" style={{ "marginTop": "max(0rem, 2rem)" }}>
              Google Developer Student Club
            </p>
            <p style={{
              "fontSize": "medium",
            }}> Tezpur University</p>
            <br />
            <p style={{ "fontSize": "medium" }}>Get Connected</p>
            <div className="input-icons">
              <input className="input icon-rtl" placeholder="Enter Email" />
            </div>
            <div className="social text-center mt-60">
              <ul>
                <li>
                  <span>
                    <p style={{ "fontSize": "large" }}>Follow Us On</p>
                  </span>
                </li>
                <br />
                <li>
                  <div>
                    <a href="https://instagram.com/gdsc_tezu?igshid=MzRlODBiNWFlZA==">
                      <InstagramIcon />
                      {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/> */}
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="https://www.linkedin.com/company/gdsc-tezpur-university/mycompany/"
                      target="_blank"
                    >
                      <LinkedInIcon />

                      {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/> */}
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="https://github.com/afk-ankit/gdsc-tu"
                      target="_blank"
                    >
                      <GitHubIcon />
                      {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/> */}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright text-center">
                    <p className="text" style={{ "fontSize": "small", "fontWeight": "400" }}>
                      Copyright © 2023 GDSC TU. All Rights Reserved
                    </p>
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
