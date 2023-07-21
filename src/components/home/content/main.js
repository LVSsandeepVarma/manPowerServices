import React, { useState } from "react";
import ServiceModal from "../modal/modal";
import ServicesForm from "../form/form";
import axios from "axios";
import FormMessage from "../form/formMessage";

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("")
  const [loadStatus, setLoadStatus] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseFormModal=()=>{
    setIsOpen(false)
  }

  const handleEmailChange = (e)=>{
      let emailValue = e?.target?.value

      setEmail(emailValue)
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
      if(!regex.test(emailValue)){
        // console.log("invalid email")
          setEmailError("invalid email")
      }else{
        // console.log("valid email")
        setEmailError("")
      }
    }

  const contactUsSubmit = async()=>{
    setError("");
    setSuccess("")
    setLoadStatus(true)
    // console.log("values", email)
    try{
      if(emailError == ""){

        // api call
        const response = {"data":{"status":true}}
        // await axios.post("")
        // console.log(response?.data?.status)
        if(response?.data?.status){
          setSuccess("submitted successfully")
        }else{
          setError("submission failed")
        }
    }
    }catch(err){
      console.log("err", err)
    }
    setEmail("");
    setLoadStatus(false)
  }

  return (
    <>
      {showModal && (
        <ServiceModal
          isOpen={showModal}
          onClose={handleCloseModal}
          service={service}
        />
      )}
      {loadStatus && <div className="preloader">
          <div className="loader"></div>
        </div>}
      <main className="nk-pages">
        <section className="nk-banner nk-banner-project-manage overflow-hidden bg-gray">
          <div className="nk-banner-wrap pb-lg-8">
            <div className="container">
              <div className="row align-items-lg-center">
                <div className="col-lg-6 pb-5 pb-md-7 pb-lg-0">
                  <div className="text-center text-lg-start">
                    <h1
                      className="display-6 mb-4 pe-lg-5"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      {" "}
                      HOME SERVICES,{" "}
                      <span className="text-primary">ON REQUEST</span>
                    </h1>
                    <p
                      className="text-dark m-0"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    >
                      {" "}
                      Plumbing Services, Electrical Services, Servicing, Repair,
                      Installation & Uninstallation{" "}
                    </p>
                    <ul className="nk-btn-group justify-content-center justify-content-lg-start pt-5">
                      <li data-aos="fade-up" data-aos-delay="75">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#myModal"
                          className="btn btn-primary"
                          onClick={() => {
                            setShowModal(true);
                          }}
                        >
                          Get Started
                        </a>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="100">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#myModal"
                          className="btn btn-outline-primary"
                        >
                          Learn More
                        </a>
                      </li>
                    </ul>
                    <div className="pt-5">
                      <ul className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-5 gap-lg-7 align-items-center">
                        <li data-aos="fade-up" data-aos-delay="125">
                          <span className="d-block h3 m-0">100+</span>
                          <p className="fs-16 text-dark"> Professionals</p>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="150">
                          <span className="d-block h3 m-0">120+</span>
                          <p className="fs-16 text-dark">Services</p>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="175">
                          <span className="d-block h3 m-0">200+</span>
                          <p className="fs-16 text-dark">Location</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* <!-- <div className="nk-frame mb-5 text-center text-lg-end" data-aos="fade-up" data-aos-delay="0"><img src="assets/images/project-manage/banner-cover-1.jpg" alt="project-manage" className="position-relative overflow-hidden rounded-3">
                                    <div className="nk-video-btn ps-lg-6"><a data-fslightbox="" href="https://www.youtube.com/watch?v=pVE92TNDwUk" className="media media-lg media-middle media-circle text-bg-primary shadow-xl animate animate-infinite animate-pulse animate-duration-1"><em className="icon ni ni-play-fill"></em></a></div>
                                </div> --> */}
                  <ServicesForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="nk-section nk-section-features py-7 py-lg-120"
        >
          <div className="container">
            <div className="row justify-content-center">
              {/* <div className="col-xl-10 col-xxl-8">
                <h5
                  className="text-gray-800 text-center fw-normal mb-5"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Over <span className="text-dark">32K+ software</span> business
                  growing with NioLand
                </h5>
                <div className="row gy-2 gap-sm-2 justify-content-center text-center align-items-center">
                  <div className="col-4 col-sm-3 col-lg-2">
                    <div
                      className="nk-brand"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brands/a.png"
                          alt="brand"
                          className="opacity-75"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 col-lg-2">
                    <div
                      className="nk-brand"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brands/b.png"
                          alt="brand"
                          className="opacity-75"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 col-lg-2">
                    <div
                      className="nk-brand"
                      data-aos="fade-up"
                      data-aos-delay="150"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brands/c.png"
                          alt="brand"
                          className="opacity-75"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 col-lg-2">
                    <div
                      className="nk-brand"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brands/d.png"
                          alt="brand"
                          className="opacity-75"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 col-lg-2">
                    <div
                      className="nk-brand"
                      data-aos="fade-up"
                      data-aos-delay="250"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brands/e.png"
                          alt="brand"
                          className="opacity-75"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="row justify-content-center">
              {/* <hr className="my-6 my-lg-7" /> */}
              <div className="col-lg-8">
                <div className="nk-section-head text-center">
                  <h2 className="nk-section-title">SERVICES OFFERED</h2>
                  <p className="nk-section-text">
                    [Manpower services] provide a valuable resource for
                    businesses of all sizes – from individual home to large
                    corporate enterprises. Our services are tailored to the
                    specific needs of our customers, providing them with the
                    right skills and expertise to make their projects a success.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-5">
              <div
                className="col-lg-4"
                onClick={() => {
                  setShowModal(true);
                }}
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="card flex-sm-row p-5">
                  <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                    <img
                      src="assets/images/icons/Electric-Serv.png"
                      alt="icon"
                      className="img-fluid flex-shrink"
                    />
                  </div>
                  <div>
                    <div>
                      <h6 className="mb-1">ELECTRICAL SERVICES</h6>
                      <p className="fs-16 text-gray-1200 line-clamp-2">
                        What if you could get all your website tasks off your
                        plate and focus only on the fun stuff.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn-link text-primary"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <em className="icon ni ni-arrow-long-right"></em>
                      <span className="ms-2"> Book now </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="50">
                <div className="card flex-sm-row p-5">
                  <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                    <img
                      src="assets/images/icons/Plumbing-Serv.png"
                      alt="icon"
                      className="img-fluid flex-shrink"
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <h6 className="mb-1">PLUMBING SERVICES</h6>
                      <p className="fs-16 text-gray-1200 line-clamp-2">
                        I must explain to you how all this mistaken idea denou
                        ncing plea sure and praising pain and typesetting.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn-link text-primary"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <em className="icon ni ni-arrow-long-right"></em>
                      <span className="ms-2"> Book now </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card flex-sm-row p-5">
                  <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                    <img
                      src="assets/images/icons/Pack-Movers.png"
                      alt="icon"
                      className="img-fluid flex-shrink"
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <h6 className="mb-1">PACKERS & MOVERS</h6>
                      <p className="fs-16 text-gray-1200 line-clamp-2">
                        What if you could get all your website tasks off your
                        plate and focus only on the fun stuff.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn-link text-primary"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <em className="icon ni ni-arrow-long-right"></em>
                      <span className="ms-2"> Book now </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
                <div className="card flex-sm-row p-5">
                  <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                    <img
                      src="assets/images/icons/Garbage.png"
                      alt="icon"
                      className="img-fluid flex-shrink"
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <h6 className="mb-1">GARBAGE</h6>
                      <p className="fs-16 text-gray-1200 line-clamp-2">
                        Praising pain and typesetting industry has been the
                        indust standard dummy text ever since was complete.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn-link text-primary"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <em className="icon ni ni-arrow-long-right"></em>
                      <span className="ms-2"> Book Now </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
                <div className="card flex-sm-row p-5">
                  <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                    <img
                      src="assets/images/icons/Scrap.png"
                      alt="icon"
                      className="img-fluid flex-shrink"
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <h6 className="mb-1">SCRAP</h6>
                      <p className="fs-16 text-gray-1200 line-clamp-2">
                        Praising pain and typesetting industry has been the
                        indust standard dummy text ever since was complete.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn-link text-primary"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <em className="icon ni ni-arrow-long-right"></em>
                      <span className="ms-2"> Book Now </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="nk-section nk-section-testimonial py-7 py-lg-120"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="nk-section-head text-center">
                  <h2 className="nk-section-title">
                    What our amazing customers say about Our Services
                  </h2>
                  <p className="nk-section-text">
                    {" "}
                    Get informed by browsing through our comprehensive reviews
                    section. Check out our reviews to learn more about our
                    products!{" "}
                  </p>
                  <ul className="nk-btn-group justify-content-center pt-5">
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal"
                        className="btn btn-primary"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        Get Started
                      </a>
                    </li>
                    {/* <li>
                      <a href="signup.html" className="btn btn-outline-primary">
                        Read Case Study
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="swiper swiper-init nk-swiper-s3 "
              data-breakpoints='{"0": {"slidesPerView": 1,"slidesPerGroup": 1,"autoplay":true,"speed":2000,"loop":true }}'
              data-space-between="30"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="nk-testimonial-wrap p-3 p-sm-5">
                    <div className="nk-testimonial-card nk-testimonial-card-s1">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="nk-testimonial-cover mb-5 mb-lg-0  text-center">
                            <img
                              src="assets/images/peoples/people-6.png"
                              alt="people-3"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="nk-testimonial-content p-4 pt-0 p-lg-0">
                            <div className="nk-testimonial-icon">
                              <em className="icon ni ni-quote-left"></em>
                            </div>
                            <h3
                              className="fst-italic m-0"
                              style={{ fontSize: "medium" }}
                            >
                              I recently used Man Power Services for my business
                              and I was so pleased with the results. The staff
                              was knowledgeable, friendly, and helpful
                              throughout the entire process. They were able to
                              provide me with the exact services that I needed
                              and everything was handled in a timely and
                              efficient manner. I would highly recommend Man
                              Power Services for anyone looking for quality
                              services.
                            </h3>
                            <div className="d-flex flex-wrap justify-content-between align-items-center g-3 pt-5 pt-xl-7">
                              <div className="media-text text-start">
                                <h4 className="title m-0">Robert Mayer</h4>
                                <span className="fs-16 text-gray-800">
                                  Founder of Greenish
                                </span>
                              </div>
                              <div className="nk-testimonial-brand">
                                <img
                                  src="assets/images/brands/greenish-red.png"
                                  alt="brand-logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="nk-testimonial-wrap p-3 p-sm-5">
                    <div className="nk-testimonial-card nk-testimonial-card-s1">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="nk-testimonial-cover mb-5 mb-lg-0  text-center">
                            <img
                              src="assets/images/peoples/people-6.png"
                              alt="people-3"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="nk-testimonial-content p-4 pt-0 p-lg-0">
                            <div className="nk-testimonial-icon">
                              <em className="icon ni ni-quote-left"></em>
                            </div>
                            <h3
                              className="fst-italic m-0"
                              style={{ fontSize: "medium" }}
                            >
                              I've used Man Power Services for a few different
                              projects and have been consistently impressed with
                              the level of professionalism and quality of work
                              provided. They take the time to understand the
                              specific needs of each customer and provide the
                              best possible solution. Their prices are also very
                              reasonable and competitive. Highly recommend!
                            </h3>
                            <div className="d-flex flex-wrap justify-content-between align-items-center g-3 pt-5 pt-xl-7">
                              <div className="media-text text-start">
                                <h4 className="title m-0">Robert Mayer</h4>
                                <span className="fs-16 text-gray-800">
                                  Founder of Luminous
                                </span>
                              </div>
                              <div className="nk-testimonial-brand">
                                <img
                                  src="assets/images/brands/luminous-red.png"
                                  alt="brand-logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="nk-testimonial-wrap p-3 p-sm-5">
                    <div className="nk-testimonial-card nk-testimonial-card-s1">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="nk-testimonial-cover mb-5 mb-lg-0  text-center">
                            <img
                              src="assets/images/peoples/people-6.png"
                              alt="people-3"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="nk-testimonial-content p-4 pt-0 p-lg-0">
                            <div className="nk-testimonial-icon">
                              <em className="icon ni ni-quote-left"></em>
                            </div>
                            <h3
                              className="fst-italic m-0"
                              style={{ fontSize: "medium" }}
                            >
                              Man Power Services is an exceptional resource for
                              any business needs. The staff is knowledgeable and
                              friendly, and they have an amazing selection of
                              services to choose from. They also provide
                              excellent customer support which is always so
                              helpful when dealing with any issues or questions.
                              Highly recommend Man Power Services!
                            </h3>
                            <div className="d-flex flex-wrap justify-content-between align-items-center g-3 pt-5 pt-xl-7">
                              <div className="media-text text-start">
                                <h4 className="title m-0">Robert Mayer</h4>
                                <span className="fs-16 text-gray-800">
                                  Founder of Sitemark
                                </span>
                              </div>
                              <div className="nk-testimonial-brand">
                                <img
                                  src="assets/images/brands/sitemark-red.png"
                                  alt="brand-logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="nk-testimonial-wrap p-3 p-sm-5">
                    <div className="nk-testimonial-card nk-testimonial-card-s1">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="nk-testimonial-cover mb-5 mb-lg-0  text-center">
                            <img
                              src="assets/images/peoples/people-6.png"
                              alt="people-3"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="nk-testimonial-content p-4 pt-0 p-lg-0">
                            <div className="nk-testimonial-icon">
                              <em className="icon ni ni-quote-left"></em>
                            </div>
                            <h3
                              className="fst-italic m-0"
                              style={{ fontSize: "medium" }}
                            >
                              I recently had the pleasure of using Man Power
                              Services for a project and I was thoroughly
                              impressed. The staff is friendly and knowledgeable
                              and the services they offer are top-notch. Their
                              prices are also very reasonable and I would highly
                              recommend them to anyone looking for quality
                              services.
                            </h3>
                            <div className="d-flex flex-wrap justify-content-between align-items-center g-3 pt-5 pt-xl-7">
                              <div className="media-text text-start">
                                <h4 className="title m-0">Robert Mayer</h4>
                                <span className="fs-16 text-gray-800">
                                  Founder of Cloud
                                </span>
                              </div>
                              <div className="nk-testimonial-brand">
                                <img
                                  src="assets/images/brands/cloud-red.png"
                                  alt="brand-logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="nk-testimonial-wrap p-3 p-sm-5">
                    <div className="nk-testimonial-card nk-testimonial-card-s1">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <div className="nk-testimonial-cover mb-5 mb-lg-0  text-center">
                            <img
                              src="assets/images/peoples/people-6.png"
                              alt="people-3"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="nk-testimonial-content p-4 pt-0 p-lg-0">
                            <div className="nk-testimonial-icon">
                              <em className="icon ni ni-quote-left"></em>
                            </div>
                            <h3
                              className="fst-italic m-0"
                              style={{ fontSize: "medium" }}
                            >
                              Man Power Services is a great option for
                              businesses looking for quality services. They have
                              an impressive selection of services to choose from
                              and their staff is knowledgeable and friendly.
                              They also provide excellent customer support which
                              is always so helpful when dealing with any issues
                              or questions. Highly recommend!
                            </h3>
                            <div className="d-flex flex-wrap justify-content-between align-items-center g-3 pt-5 pt-xl-7">
                              <div className="media-text text-start">
                                <h4 className="title m-0">Robert Mayer</h4>
                                <span className="fs-16 text-gray-800">
                                  Founder of Cloud
                                </span>
                              </div>
                              <div className="nk-testimonial-brand">
                                <img
                                  src="assets/images/brands/cloud-red.png"
                                  alt="brand-logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </section>

        <section id="faq" className="nk-section pt-7 pt-lg-120">
          <div className="container">
            <div className="row justify-content-between">
              <div
                className="col-lg-5 col-xxl-4"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="nk-section-head text-center text-lg-start mt-lg-4 pb-5 pb-lg-0">
                  <h2 className="title mb-2 mb-lg-3">
                    Frequently Asked Questions
                  </h2>
                  <p className="nk-section-text">
                  Please take a moment to see if your question has already been answered in our FAQ section.
                  </p>
                  <ul className="nk-btn-group flex-wrap justify-content-center justify-content-lg-start pt-5">
                    <li>
                      <a data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }} className="btn btn-primary">
                        Get Started
                      </a>
                    </li>
                    <li>
                      <a data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => {
                        setShowModal(true);
                      }} className="btn btn-outline-primary">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-xxl-8">
                <div className="nk-faq">
                  <div
                    className="accordion accordion-s3 bg-white px-0 px-xl-5"
                    id="businessFaq"
                  >
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="accordion-header">
                        <h6>
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqCollapseOne"
                          >
                            <span className="text-capitalize">
                              How much do your services cost?
                            </span>
                            <em className="icon ni ni-plus on"></em>
                            <em className="icon ni ni-minus off"></em>
                          </button>
                        </h6>
                      </div>
                      <div
                        id="faqCollapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#businessFaq"
                      >
                        <div className="accordion-body">
                          <p className="fs-16">
                            {" "}
                            Our services are competitively priced and vary
                            depending on the type and scope of services
                            requested. Please contact us for a free consultation
                            to discuss your specific needs and pricing.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="25"
                    >
                      <div className="accordion-header">
                        <h6>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqCollapseTwo"
                          >
                            <span className="text-capitalize">
                              How can I find qualified professional through your
                              [Manpower services website]?
                            </span>
                            <em className="icon ni ni-plus on"></em>
                            <em className="icon ni ni-minus off"></em>
                          </button>
                        </h6>
                      </div>
                      <div
                        id="faqCollapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#businessFaq"
                      >
                        <div className="accordion-body">
                          <p className="fs-16">
                            {" "}
                            We offer a range of services to help you find
                            qualified talent, including plumbing, house
                            cleaning, electrician and interior organizing, and
                            more.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="50"
                    >
                      <div className="accordion-header">
                        <h6>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqCollapseThree"
                          >
                            <span className="text-capitalize">
                              How long does it take to hire through your
                              [Manpower services website]?
                            </span>
                            <em className="icon ni ni-plus on"></em>
                            <em className="icon ni ni-minus off"></em>
                          </button>
                        </h6>
                      </div>
                      <div
                        id="faqCollapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#businessFaq"
                      >
                        <div className="accordion-body">
                          <p className="fs-16">
                            {" "}
                            The timeline for finding through our [Manpower
                            services website] varies depending on the type of
                            job and the number of candidates. Generally, the
                            process can take anywhere from a few hours to a few
                            days.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="75"
                    >
                      <div className="accordion-header">
                        <h6>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqCollapseFour"
                          >
                            <span className="text-capitalize">
                            Can I use your Manpower services website to hire outside benguluru?
                            </span>
                            <em className="icon ni ni-plus on"></em>
                            <em className="icon ni ni-minus off"></em>
                          </button>
                        </h6>
                      </div>
                      <div
                        id="faqCollapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#businessFaq"
                      >
                        <div className="accordion-body">
                          <p className="fs-16">
                            {" "}
                            No, our Manpower services website can help you find and hire talent from benguluru.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="accordion-header">
                        <h6>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqCollapseFive"
                          >
                            <span className="text-capitalize">
                              When will my order arrive?
                            </span>
                            <em className="icon ni ni-plus on"></em>
                            <em className="icon ni ni-minus off"></em>
                          </button>
                        </h6>
                      </div>
                      <div
                        id="faqCollapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#businessFaq"
                      >
                        <div className="accordion-body">
                          <p className="fs-16">
                            {" "}
                            The delivery time of your order depends on various
                            factors such as the shipping method selected, the
                            destination, and any applicable customs procedures.
                            Once your order is processed and shipped, you will
                            receive a confirmation email with tracking
                            information to monitor the progress of your package.
                            For more specific details about the estimated
                            delivery time, please refer to the shipping
                            information provided during the checkout process or
                            contact our customer support team for assistance.{" "}
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="nk-section nk-section-cta nk-cta nk-cta-one"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="nk-cta-wrap rounded-4">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xxl-8">
                  <div className="nk-section-head text-center">
                    {/* <h2 className="nk-section-title" data-aos="fade-up">
                      Start your free 30-day trial
                    </h2> */}
                    <p
                      className="nk-section-text"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      style={{fontWeight:"bold"}}
                    >
                      Please contact us for a free consultation to discuss your specific needs and pricing.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-8 col-xxl-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <form
                    data-action="form/subscribe.php"
                    className="form-submit-init"
                    onSubmit={contactUsSubmit}
                  >
                    <div className="form-group nk-newsletter-one row">
                      <div className="col-md-9">
                        <div className="form-control-wrap mb-4 mb-md-0">
                          <input
                            type="email"
                            name="email"
                            className="form-control text-base"
                            placeholder="name@gmail.com"
                            onChange={handleEmailChange}
                            required
                            style={{ marginBottom: "0" }}
                          />
                          {emailError.length>0 && <p className="error">{emailError}</p>}
                        </div>
                      </div>
                      <div className="col-md-3 ps-md-0">
                        {(emailError?.length > 0 || email?.length == 0) && (
                          <input
                          disabled
                          type="submit"
                          className="btn btn-primary btn-block h-100"
                          value="Contact Us"
                        />
                        ) }
                        {(emailError?.length == 0 && email?.length >0 ) && (
                          <input
                          type="submit"
                          className="btn btn-primary btn-block h-100"
                          value="Contact Us"
                        />
                        ) }
         {(error?.length >0) && <FormMessage type={"Error"} message={error} isOpen={isOpen} close={handleCloseFormModal} />}
          {(success?.length > 0) && <FormMessage type={"Success"} message={success} isOpen={isOpen} close={handleCloseFormModal}  />}
                        
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
      {/* <!-- <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div> --> */}

      {/* <!-- Modal body --> */}
      {/* <div className="subscribe">
              <p>Get Quote</p>
              <div className="">
                <input
                  placeholder="Your Name"
                  className="subscribe-input"
                  name="name"
                  type="text"
                />
              </div>
              <div className="">
                <input
                  placeholder="Your E-mail"
                  className="subscribe-input"
                  name="email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <select className="form-control modal-select" name="">
                  <option value="" selected disabled>
                    --Select Service--
                  </option>
                  <option value="">Electrical</option>
                  <option value="">Plumbing</option>
                  <option value="">Packers & Movers</option>
                  <option value="">Garbage</option>
                  <option value="">Scrap</option>
                </select>
              </div>
              {/* <!-- <div className="">
              <input placeholder="Description" className="subscribe-input" name="description" type="text">
            </div> --> */}
      {/* <div className="">
        <textarea
          className="form-control modal-form-text"
          name="name"
          rows="2"
          placeholder="Description..."
        ></textarea>
      </div>
      <button className="submit-btn">SUBMIT</button> */}
      {/* </div> */}

      {/* <!-- Modal footer --> */}
      {/* <!-- <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div> --> */}
      {/* // </div> */}
      {/* // </div> */}
      {/* // </div> */}
    </>
  );
}
