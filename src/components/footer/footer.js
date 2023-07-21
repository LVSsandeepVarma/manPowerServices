import React from "react";

export default function Footer() {
  return (
    <footer className="nk-footer">
      <div className="nk-footer-top">
        <div className="container">
        <hr className="my-6 my-lg-2"/>
          <div className="nk-footer-content row justify-content-xl-between">
            <div className="col-md-8 col-lg-6 col-xxl-6">
              <div className="nk-footer-brand pb-5 pb-lg-0">
                <div className="nk-footer-brand-info mb-4">
                  <div className="nk-footer-logo">
                    <a href="/" className="logo-link">
                      <div className="logo-wrap">
                        <img
                          className="logo-img"
                          src="images/logo-s1-dark.png"
                          srcSet="
                          https://nioland.themenio.com/images/logo-s1-dark2x.png 2x
                        "
                          alt="brand-logo"
                        />
                      </div>
                    </a>
                  </div>
                  <p>
                    Streamline your business operations with our powerful suite
                    of solutions. Boost productivity and drive growth with
                    NioLand.
                  </p>
                </div>
                {/* <ul className="nk-footer-social">
                  <li>
                    <a href="#">
                      <em className="icon ni ni-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="icon ni ni-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="icon ni ni-linkedin"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="icon ni ni-telegram"></em>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-6 col-xxl-6">
              <div className="row justify-content-between">
                <div className="col-sm-8 col-md-10">
                  <div className="nk-footer-info">
                    <h5 className="title">Services</h5>
                    <ul className="row gy-1 gy-sm-4">
                      <li className="col-6">
                        <a href="features.html">Electrical Services</a>
                      </li>
                      <li className="col-6">
                        <a href="about.html">Plumbing Services</a>
                      </li>
                      <li className="col-6">
                        <a href="pricing.html">Packers & Movers</a>
                      </li>
                      <li className="col-6">
                        <a href="blogs.html">Garbage</a>
                      </li>
                      <li className="col-6">
                        <a href="blog-single.html">Scrap</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-sm-4">
                  <div className="nk-footer-info">
                    <h5 className="title">Utility Pages</h5>
                    <ul className="row gy-1 gy-sm-4">
                      <li className="col-12">
                        <a href="login.html">Login</a>
                      </li>
                      <li className="col-12">
                        <a href="signup.html">Sign up</a>
                      </li>
                      <li className="col-12">
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                      <li className="col-12">
                        <a href="page-404.html">404 Not Found</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nk-footer-bottom">
        <div className="container">
          <div className="nk-footer-content row justify-content-between">
            <div className="col-lg-6 px-0">
              <p className="nk-footer-copyright-text text-center text-lg-start">
              Copyrights © 2023 All Rights Reserved by <a href="#">Man Power Services</a>.
              </p>
            </div>
            <div className="col-lg-6 px-0">
              <ul className="nk-footer-copyright justify-content-center justify-content-lg-end">
                {/* <li>
                  <a className="nk-footer-text" href="#">
                    All Rights
                  </a>
                </li> */}
                <li>
                  <a className="nk-footer-text" href="/terms">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a className="nk-footer-text" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
