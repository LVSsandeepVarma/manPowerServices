import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Privacy() {
  return (
    <>
      <div className="nk-app-root careers">
        <Header />
        <main className="nk-pages">
          <section className="nk-section pt-120 pt-lg-180">
            <div className="nk-mask blur-1 left top"></div>
            <div className="nk-mask blur-1 right bottom"></div>
            <div className="container">
              <div className="nk-block-head md">
                <div
                  className="nk-section-head"
                  style={{ paddingBottom: "0px" }}
                >
                  <nav>
                    {/* <ol className="breadcrumb mb-3 mb-md-4">
                    {/* <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li> 
                    <li className="breadcrumb-item active" aria-current="page">
                      Terms &amp; Conditions
                    </li>
                  </ol> */}
                  </nav>
                  <h2>Privacy Policy</h2>
                </div>
                <hr className="mt-5 mb-0" />
              </div>
              <div className="row g-gs pt-3">
                <div className="col-lg-3">
                  <div className="nk-entry-sidebar">
                    <ul className="nk-list-link nk-list-link-page flush">
                      <li className="active">
                        <a href="#headingOne" className="fs-16">
                          Website and Mobile App Terms of Use
                        </a>
                      </li>
                      <li>
                        <a href="#headingtwo" className="fs-16">
                          What about my privacy?
                        </a>
                      </li>
                      <li>
                        <a href="#headingThree" className="fs-16">
                          Are there restrictions on how I can use the Platform?
                        </a>
                      </li>
                      <li>
                        <a href="#headingFour" className="fs-16">
                          Who is responsible for what I see and do on the
                          Platform?
                        </a>
                      </li>
                      {/* <li>
                      <a href="#" className="fs-16">
                        Prohibited Activities
                      </a>
                    </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="nk-entry-wrap pt-3 ps-lg-5">
                    <div className="nk-entry">
                      <div className="pb-5" id="headingOne">
                        <h5>Website and Mobile App Terms of Use</h5>
                        <p className="fs-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nam vitae viverra dolor lacus convallis
                          lobortis quam. Blandit purus sem euismod sit cursus
                          non eu tristique sem. Etiam cras turpis adipiscing
                          molestie elit habitasse. Amet, maecenas cras imperdiet
                          nulla blandit interdum dictum. Cras nunc, risus
                          aliquet facilisi. Ullamcorper posuere porta placerat
                          hendrerit eget neque risus. In gravida feugiat nisl
                          ipsum sed aliquam. Consectetur aliquet vestibulum sit
                          a id. Sed vitae nunc proin feugiat blandit scelerisque
                          ac ultrices. Nulla malesuada viverra eros, sem lectus.
                          Dolor sed ullamcorper magna nibh aliquam mauris
                          fermentum, elit. Nec in augue vel in tellus.
                          Consectetur nunc iaculis donec scelerisque.
                        </p>
                        <p className="fs-16">
                          Enim suscipit quam venenatis eget nulla. Non augue et,
                          lobortis vestibulum venenatis enim viverra consequat
                          elementum. Semper eu dictum urna ullamcorper dolor.
                          Potenti sed nunc dignissim laoreet volutpat sit.
                          Fermentum tellus, diam sollicitudin feugiat aliquet
                          nullam turpis ipsum. Dui vestibulum commodo malesuada
                          sagittis in mauris lobortis. Leo amet augue malesuada
                          nibh commodo orci at diam ac.
                        </p>
                        <p className="fs-16">
                          Mauris volutpat faucibus cursus nullam odio sit a
                          eget. Leo lacus, sit eleifend amet vitae non. Risus,
                          sit sit arcu augue. Pellentesque ultrices turpis
                          ultrices non sollicitudin nibh aenean hac tempor.
                          Blandit ipsum magna venenatis egestas sed sagittis.
                          Iaculis vel volutpat, rhoncus, sit sit convallis
                          viverra. Diam proin pretium eu odio nisi, proin.
                          Ultrices eu in condimentum aliquam.
                        </p>
                        <p className="fs-16">
                          Fusce id mi nisl, amet. Quis viverra ante mauris
                          vulputate varius faucibus dolor sit at. Sed quam
                          interdum sem enim pharetra. Sit porttitor tempor
                          facilisis in. Euismod vel pharetra pretium gravida
                          amet. Tincidunt tortor arcu in mollis fermentum
                          volutpat fringilla. Quis elementum feugiat ac nulla
                          suspendisse ornare euismod. Lorem tincidunt maecenas
                          sed feugiat massa commodo sed malesuada convallis.
                          Tortor at mattis risus, integer pretium, dui,
                          faucibus.
                        </p>
                      </div>
                      <div className="pb-5" id="headingtwo">
                        <h5>What about my privacy?</h5>
                        <p className="fs-16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nam vitae viverra dolor lacus convallis
                          lobortis quam. Blandit purus sem euismod sit cursus
                          non eu tristique sem. Etiam cras turpis adipiscing
                          molestie elit habitasse. Amet, maecenas cras imperdiet
                          nulla blandit interdum dictum. Cras nunc, risus
                          aliquet facilisi. Ullamcorper posuere porta placerat
                          hendrerit eget neque risus. In gravida feugiat nisl
                          ipsum sed aliquam. Consectetur aliquet vestibulum sit
                          a id. Sed vitae nunc proin feugiat blandit scelerisque
                          ac ultrices. Nulla malesuada viverra eros, sem lectus.
                          Dolor sed ullamcorper magna nibh aliquam mauris
                          fermentum, elit. Nec in augue vel in tellus.
                          Consectetur nunc iaculis donec scelerisque.
                        </p>
                        <p className="fs-16">
                          Enim suscipit quam venenatis eget nulla. Non augue et,
                          lobortis vestibulum venenatis enim viverra consequat
                          elementum. Semper eu dictum urna ullamcorper dolor.
                          Potenti sed nunc dignissim laoreet volutpat sit.
                          Fermentum tellus, diam sollicitudin feugiat aliquet
                          nullam turpis ipsum. Dui vestibulum commodo malesuada
                          sagittis in mauris lobortis. Leo amet augue malesuada
                          nibh commodo orci at diam ac.
                        </p>
                      </div>
                      <div className="pb-5" id="headingthree">
                        <h5>
                          Are there restrictions on how I can use the Platform?
                        </h5>
                        <p className="fs-16">
                          You agree that all content and materials, including
                          without limitation information, data, text,
                          photographs, videos, audio clips, written posts and
                          comments, software, scripts, graphics, and interactive
                          features (collectively, “Content”) generated,
                          provided, or otherwise made accessible or available by
                          NioLand on the Platform are protected by copyrights,
                          trademarks, service marks, patents, trade secrets or
                          other proprietary rights and laws. All such Content is
                          the proprietary property of NioLand with all rights
                          reserved. Except as expressly authorized by NioLand in
                          writing, you agree not to sell, license, rent, modify,
                          distribute, copy, reproduce, transmit, publicly
                          display, publish, adapt, edit or create derivative
                          works from such Content. For clarity, the foregoing
                          restrictions apply to third party trademarks, which
                          may be used by us on the Platform under license.
                          Unless otherwise noted, we are not affiliated with or
                          endorsed by the owner of any third-party trademarks
                          displayed.
                        </p>
                        <p className="fs-16">
                          Subject to these Terms of Use, we grant each user of
                          the Platform a limited, non-exclusive,
                          non-sublicensable and non-transferable license to use
                          (i.e., to download and display locally) Content solely
                          for purposes of using the Platform or receiving
                          services. The Platform may allow you to copy or
                          download certain Content, but please remember that
                          even where these functionalities exist, all the
                          restrictions in this section still apply.
                        </p>
                        <p className="fs-16">
                          By submitting information or content to or through the
                          Platform, by email or over the phone, you hereby do
                          and shall grant us a worldwide, non-exclusive,
                          perpetual, royalty-free, fully paid, sublicensable and
                          transferable license to use such information. Without
                          limiting the generality of the foregoing, you
                          acknowledge that NioLand may disclose and transfer any
                          such information that you provide (i) to its
                          affiliates, agents or service providers; (ii) to any
                          other person or entity with your consent; or (iii) if
                          we have a right or duty to disclose or are permitted
                          or compelled to disclose such information by law.
                        </p>
                      </div>
                      <div className="pb-5" id="headingFour">
                        <h5>
                          Who is responsible for what I see and do on the
                          Platform?
                        </h5>
                        <p className="fs-16">
                          You agree that all content and materials, including
                          without limitation information, data, text,
                          photographs, videos, audio clips, written posts and
                          comments, software, scripts, graphics, and interactive
                          features (collectively, “Content”) generated,
                          provided, or otherwise made accessible or available by
                          NioLand on the Platform are protected by copyrights,
                          trademarks, service marks, patents, trade secrets or
                          other proprietary rights and laws. All such Content is
                          the proprietary property of NioLand with all rights
                          reserved. Except as expressly authorized by NioLand in
                          writing, you agree not to sell, license, rent, modify,
                          distribute, copy, reproduce, transmit, publicly
                          display, publish, adapt, edit or create derivative
                          works from such Content. For clarity, the foregoing
                          restrictions apply to third party trademarks, which
                          may be used by us on the Platform under license.
                          Unless otherwise noted, we are not affiliated with or
                          endorsed by the owner of any third-party trademarks
                          displayed.
                        </p>
                        <p className="fs-16">
                          Subject to these Terms of Use, we grant each user of
                          the Platform a limited, non-exclusive,
                          non-sublicensable and non-transferable license to use
                          (i.e., to download and display locally) Content solely
                          for purposes of using the Platform or receiving
                          services. The Platform may allow you to copy or
                          download certain Content, but please remember that
                          even where these functionalities exist, all the
                          restrictions in this section still apply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="nk-section">
            <div className="container">
              <div
                className="nk-cta-wrap nk-cta-card bg-primary-gradient rounded-3 is-theme position-relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* <div className="row g-0 align-items-center overflow-hidden">
                <div className="col-lg-7 order-lg-0 order-2">
                  <div className="nk-block-head-content mb-0">
                    <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">
                      Start tracking your user analytics to boost your business
                    </h2>
                    <ul className="nk-btn-group flex-wrap ps-1">
                      <li>
                        <a href="#" className="btn btn-white btn-lg">
                          Get Started
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-outline-white btn-lg">
                          Pricing &amp; Plans
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 order-lg-0 order-1">
                  <div className="nk-cta-img-wrap text-end ps-5 pt-7 pt-lg-0 ps-sm-6 ps-lg-0">
                    <img
                      data-aos="fade-left"
                      data-aos-delay="200"
                      src="assets/career/thumb/c.png"
                      alt="tracking-thumb"
                      className="me-n1"
                    />
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </section>
          {/* <section className="nk-section nk-newsletter-section pb-lg-0">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center pb-5 border-bottom border-gray-50">
              <div className="col-lg-6 col-xl-4">
                <div className="nk-newsletter-content text-center text-lg-start pb-5 pb-lg-0">
                  <h4 className="text-capitalize">Subscribe to our newsletter</h4>
                  <p className="fs-16">
                    Join the 5000+ People That Uses Softnio Products.
                  </p>
                </div>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-5">
                <form
                  data-action="form/subscribe.php"
                  className="form-submit-init"
                  method="post"
                >
                  <div className="form-group nk-newsletter-one row">
                    <div className="col-md-8">
                      <div className="form-control-wrap mb-4 mb-md-0">
                        <input
                          type="email"
                          name="email"
                          className="form-control text-base"
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4 ps-md-0">
                      <input
                        type="submit"
                        className="btn btn-primary btn-block h-100"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
        </main>
        <Footer />
        <a
          href="#"
          className="scroll-top shadow animate animate-infinite animate-pulse animate-duration-2"
        >
          <em className="icon ni ni-chevrons-up"></em>
        </a>
      </div>
    </>
  );
}
