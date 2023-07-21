<header class="nk-header">
<div
          className={`nk-header-main nk-navbar-main ${
            scrolled ? "has-fixed" : ""
          } `}
        >
          <div class="container">
            <div class="nk-header-wrap">
              <div class="nk-header-logo">
                <a href="#" class="logo-link">
                  <div class="logo-wrap">
                    <img
                      class="logo-img logo-light"
                      src="images/logo-s1.png"
                      srcSet="https://nioland.themenio.com/images/logo-s12x.png 2x"
                      alt="brand-logo"
                    />
                    <img
                      class="logo-img logo-dark"
                      src="images/logo-s1-dark.png"
                      srcSet="https://nioland.themenio.com/images/logo-s1-dark2x.png 2x"
                      alt="brand-logo"
                    />
                  </div>
                </a>
              </div>
              {toggled && <div className="navbar-overlay" onClick={()=>{setToggled(false)}}></div>}
              <nav className={`nk-header-menu nk-navbar navbar-mobile ${toggled ? "navbar-active":""}`}></nav>
              <nav class="nk-header-menu nk-navbar">
                <div>
                  <ul class="nk-nav">
                    <li class="nk-nav-item">
                      <a href="#" class="nk-nav-link">
                        <span class="nk-nav-text">Home</span>
                      </a>
                    </li>
                    <li class="nk-nav-item">
                      <a href="#services" class="nk-nav-link">
                        <span class="nk-nav-text">Services</span>
                      </a>
                    </li>
                    <li class="nk-nav-item">
                      <a href="#testimonials" class="nk-nav-link">
                        <span class="nk-nav-text">Testimonials</span>
                      </a>
                    </li>
                    <li class="nk-nav-item">
                      <a href="#faq" class="nk-nav-link">
                        <span class="nk-nav-text">FAQ's</span>
                      </a>
                    </li>
                    <li class="nk-nav-item">
                      <a href="#" class="nk-nav-link">
                        <span class="nk-nav-text">Contact</span>
                      </a>
                    </li>
                  </ul>
                  <div class="nk-navbar-btn d-lg-none">
                    <ul class="nk-btn-group sm justify-content-center">
                      <li class="w-100">
                        <a
                          href="#"
                          target="_blank"
                          class="btn btn-primary w-100"
                        >
                          <em class="icon ni ni-bag-fill"></em>
                          <span>Button</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div class="nk-header-action">
                <ul class="nk-btn-group sm justify-content-center">
                  <li class="d-none d-md-block">
                    <a href="#" class="btn btn-primary text-nowrap text-nowrap">
                      <em class="icon ni ni-bag-fill"></em>
                      <span>Button</span>
                    </a>
                  </li>
                  <li class="nk-navbar-toggle"
                  onClick={() => handleNavbarToggle()}
                  >
                    <button className={`btn btn-outline-light navbar-toggle rounded-1 p-2 h-100 ${toggled ? "active" : ""}`}>
                      <em className="icon ni ni-menu"></em>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>