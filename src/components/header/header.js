import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ServiceModal from "../home/modal/modal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [loadStatus, setLoadStatus] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
      document.querySelector("scroll-top")?.classList.remove("active");
    } else {
      setScrolled(false);
      document.querySelector("scroll-top")?.classList.remove("active");
    }
  };

  const handledropdownDisplay = () => {
    // console.log(showDropdown);
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    let nav = {
      classes: {
        main: "nk-nav",
        item: "nk-nav-item",
        link: "nk-nav-link",
        toggle: "nk-nav-toggle",
        sub: "nk-nav-sub",
        subparent: "has-sub",
        active: "active",
        current: "current-page",
      },
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      setLoadStatus(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = async () => {
    // console.log(toggled, "toggle");
    // if (!toggled) {
    document.querySelector("body")?.classList.add("navbar-shown");
    // document.querySelector("navbar-mobile")?.classList.add("navbar-active");
    // document.querySelector("navbar-toggle")?.classList.add("active");
    setToggled(true);
    // } else {
    //   document.querySelector("body")?.classList.remove("navbar-shown");
    //   // document
    //   //   .querySelector("navbar-mobile")
    //   //   ?.classList.remove("navbar-active");
    //   // document.querySelector("navbar-toggle")?.classList.remove("active");
    //   setToggled(false)
    // }
  };

  return (
    <>
      <ServiceModal
        isOpen={!showModal}
        onClose={handleCloseModal}
        service={service}
      />
      {showModal && (
        <ServiceModal
          isOpen={showModal}
          onClose={handleCloseModal}
          service={service}
        />
      )}
      {loadStatus && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
      <header className="nk-header">
        <div
          className={`nk-header-main nk-navbar-main ${
            scrolled ? "has-fixed" : ""
          } `}
        >
          <div className="container">
            <div className="nk-header-wrap">
              <div className="nk-header-logo">
                <a href="#" className="logo-link">
                  <div className="logo-wrap">
                    <img
                      className="logo-img logo-light"
                      src="images/logo-s1.png"
                      srcSet="https://nioland.themenio.com/images/logo-s12x.png 2x"
                      alt="brand-logo"
                    />
                    <img
                      className="logo-img logo-dark"
                      src="images/logo-s1-dark.png"
                      srcSet="https://nioland.themenio.com/images/logo-s1-dark2x.png 2x"
                      alt="brand-logo"
                    />
                  </div>
                </a>
              </div>
              {toggled && (
                <div
                  className="navbar-overlay"
                  onClick={() => {
                    setToggled(false);
                  }}
                ></div>
              )}
              <nav
                className={`nk-header-menu nk-navbar navbar-mobile ${
                  toggled ? "navbar-active" : ""
                }`}
              >
                <div>
                  <ul className="nk-nav">
                    <li className="nk-nav-item">
                      <a href="#" className="nk-nav-link">
                        <span className="nk-nav-text">Home</span>
                      </a>
                    </li>
                    <li className="nk-nav-item">
                      <a href="#services" className="nk-nav-link">
                        <span
                          className="nk-nav-text"
                          onClick={() => {
                            setToggled(false);
                          }}
                        >
                          Services
                        </span>
                      </a>
                    </li>
                    <li className="nk-nav-item">
                      <a href="#testimonials" className="nk-nav-link">
                        <span
                          className="nk-nav-text"
                          onClick={() => {
                            setToggled(false);
                          }}
                        >
                          Testimonials
                        </span>
                      </a>
                    </li>
                    <li className="nk-nav-item">
                      <a href="#faq" className="nk-nav-link">
                        <span
                          className="nk-nav-text"
                          onClick={() => {
                            setToggled(false);
                          }}
                        >
                          FAQ's
                        </span>
                      </a>
                    </li>
                    <li className="nk-nav-item">
                      <a href="#" className="nk-nav-link">
                        <span
                          className="nk-nav-text"
                          onClick={() => {
                            setToggled(false);
                          }}
                        >
                          Contact
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="nk-navbar-btn d-lg-none">
                    <ul className="nk-btn-group sm justify-content-center">
                      <li className="w-100">
                        <a
                          data-toggle="modal"
                          data-target="#myModal"
                          onClick={() => {
                            setShowModal(true);
                          }}
                          target="_blank"
                          className="btn btn-primary w-100"
                        >
                          <em className="icon ni ni-bag-fill"></em>
                          <span
                            onClick={() => {
                              setToggled(false);
                            }}
                          >
                            Get Started
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="nk-header-action">
                <ul className="nk-btn-group sm justify-content-center">
                  <li className="d-none d-md-block">
                    <a
                      className="btn btn-primary text-nowrap text-nowrap"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <em className="icon ni ni-bag-fill"></em>
                      <span>Get Started</span>
                    </a>
                  </li>
                  <li
                    className="nk-navbar-toggle"
                    onClick={() => handleNavbarToggle()}
                  >
                    <button
                      className={`btn btn-outline-light navbar-toggle rounded-1 p-2 h-100 ${
                        toggled ? "active" : ""
                      }`}
                    >
                      <em className="icon ni ni-menu"></em>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
