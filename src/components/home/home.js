import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Main from "./content/main";
import Footer from "../footer/footer";
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [loadStatus, setLoadStatus] = useState(true);
  useEffect(() => {
    setLoadStatus(false);
    // console.log(window.scrollY)
    if (window.scrollY > 0) {
      setScrolled(true);
      // console.log(window.scrollY)
  
    } else {
      setScrolled(false);
      // console.log(window.scrollY)
    }
  });
  return (
    <>
      {loadStatus && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
      <div className="nk-app-root careers">
        <Header />
        <Main />
        <Footer />
        <a href="#" className={`scroll-top shadow animate animate-infinite animate-pulse animate-duration-2 ${scrolled ? "active":""}`}><em className="icon ni ni-chevrons-up"></em></a>

      </div>
    </>
  );
}
