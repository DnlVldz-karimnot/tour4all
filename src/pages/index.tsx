import Header from "@/components/layout/header";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import logo from "public/1.png";
import iphones from "public/hero5.png";
import Link from "next/link";
import Footer from "@/components/layout/footer";

const Index = () => {
  return (
    <>
      <>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-custom sticky-dark"
          id="navbar-sticky"
        >
          <div className="container">
            {/* LOGO */}
            <a className="logo text-uppercase" href="index-1.html">
              <img src={logo.src} alt="" width={"60vw"} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://expo.dev/artifacts/eas/qBc89mSE2PQkVmENFHAyHX.apk"
                  >
                    Descarga el apk
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav navbar-center">
                <li className="nav-item">
                  <Link
                    href="/login"
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        {/* home-agency start */}
        <section className="hero-5 bg-light" id="home">
          <div className="container">
            <div className="row justify-content-center text-center hero-content">
              <div className="col-lg-8">
                <h1 className="hero-title fw-bold mb-4 display-4">
                  Viaja con mayor comodidad gracias a{" "}
                  <span className="text-info">Tour4All</span> by Software4All.
                </h1>
                <a
                  href="https://expo.dev/artifacts/eas/qBc89mSE2PQkVmENFHAyHX.apk"
                  className="btn btn-lg btn-secondary"
                >
                  Descarga el apk
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-shape position-absolute bottom-0 start-0 end-0">
            <img src="images/hero-bottom-shape.png" alt="" className="w-100" />
          </div>
        </section>
        <div className="hero-5-img">
          <div className="container">
            <div className="row justify-content-center hero-content">
              <div className="col-lg-10">
                <div className="hero-5-img-content">
                  <img
                    src={iphones.src}
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* home-agency end */}
        {/* How it work start */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-8 col-lg-6 text-center">
                <h2 className="title">¿Cómo funciona?</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="work-box px-lg-5 text-center mb-5 mb-lg-0">
                  <div className="work-icon bg-soft-primary mb-4">
                    <i className="pli-wifi-2" />
                  </div>
                  <h5 className="fw-semibold fs-2">1</h5>
                  <p className="text-muted">
                    Dinos a qué hora y cuándo quieres que te recojamos.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="work-box px-lg-5 text-center mb-5 mb-lg-0">
                  <div className="work-icon bg-soft-success mb-4">
                    <i className="pli-car" />
                  </div>
                  <h5 className="fw-semibold fs-2">2</h5>
                  <p className="text-muted">
                    Un conductor estará esperándote en la fecha y lugar
                    establecido.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="work-box px-lg-5 text-center mb-5 mb-lg-0">
                  <div className="work-icon bg-soft-warning mb-4">
                    <i className="pli-summer" />
                  </div>
                  <h5 className="fw-semibold fs-2">3</h5>
                  <p className="text-muted">
                    Adicionalmente puedes consultar tours turísticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>
          {`
            @media (max-width: 991.98px) {
              .hero-1 {
                background-color: #1f61eb;
                padding: 110px 0 0px;
              }
            }
            .hero-bottom-shape {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
            }

            .hero-content {
              position: relative;
              z-index: 1;
            }

            .subscribe-form {
              position: relative;
            }
            .subscribe-form .form-control {
              background-color: rgba(255, 255, 255, 0.12);
              padding: 8px 180px 8px 50px;
              border-radius: 4px;
              min-height: 62px;
              color: #fff;
              border-color: transparent;
            }
            .subscribe-form .form-control:focus {
              box-shadow: none;
            }
            .subscribe-form .form-control::-moz-placeholder {
              color: #fff;
              opacity: 0.3;
            }
            .subscribe-form .form-control:-ms-input-placeholder {
              color: #fff;
              opacity: 0.3;
            }
            .subscribe-form .form-control::placeholder {
              color: #fff;
              opacity: 0.3;
            }
            .subscribe-form .form-icon {
              position: absolute;
              top: 50%;
              left: 16px;
              transform: translateY(-50%);
              color: #fff;
              opacity: 0.3;
              font-size: 20px;
            }
            .subscribe-form .form-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 8px;
            }
            .subscribe-form .form-btn .download-icon {
              display: none;
            }

            .hero-2 {
              padding: 140px 0 130px;
              background-image: url("../images/heros/hero-2-bg.png");
              background-repeat: no-repeat;
              width: 100%;
              background-size: cover;
            }
            .hero-2 .hero-2-img {
              position: relative;
            }
            .hero-2 .hero-2-img::after {
              content: "";
              background-image: url("../images/dot.png");
              position: absolute;
              bottom: -30px;
              left: -50px;
              right: auto;
              height: 120px;
              width: 120px;
              background-repeat: no-repeat;
              z-index: -1;
            }

            .hero-3 {
              padding: 170px 0 140px;
              background-image: url("../images/heros/hero-3-bg.png");
              background-repeat: no-repeat;
              width: 100%;
              background-size: cover;
            }

            .hero-4 {
              padding: 170px 0 140px;
              background-image: url("../images/heros/hero-4-bg.jpg");
              background-repeat: no-repeat;
              width: 100%;
              background-size: cover;
            }

            .hero-5 {
              padding: 170px 0 450px;
              position: relative;
              background-image: url("/hero-5-bg.png");
              background-repeat: no-repeat;
              width: 100%;
              background-size: cover;
              background-position: bottom;
            }

            .hero-5-img {
              margin-top: -22rem;
            }

            .hero-6 {
              position: relative;
            }
            .hero-6 .carousel .carousel-inner .carousel-item {
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .hero-6 .carousel .carousel-control-prev .hero-slider-arrow,
            .hero-6 .carousel .carousel-control-next .hero-slider-arrow {
              font-size: 30px;
              position: relative;
            }
            .hero-6 .carousel .carousel-control-prev .hero-slider-arrow::after,
            .hero-6 .carousel .carousel-control-next .hero-slider-arrow::after {
              content: "";
              background-color: rgba(255, 255, 255, 0.12);
              border: 1px solid rgba(255, 255, 255, 0.2);
              height: 50px;
              width: 50px;
              position: absolute;
              left: -8px;
              right: 0;
              top: -2px;
              bottom: 0;
              z-index: -1;
              transform: rotate(45deg);
              border-radius: 6px;
              box-shadow: 0px 0px 0 0px rgba(255, 255, 255, 0.08);
              transition: all 0.3s ease-in-out;
            }
            .hero-6 .carousel .carousel-control-prev:hover .hero-slider-arrow,
            .hero-6 .carousel .carousel-control-next:hover .hero-slider-arrow {
              color: #1f61eb;
            }
            .hero-6
              .carousel
              .carousel-control-prev:hover
              .hero-slider-arrow::after,
            .hero-6
              .carousel
              .carousel-control-next:hover
              .hero-slider-arrow::after {
              background-color: #fff;
              border-color: #fff;
              box-shadow: 0px 0px 0 10px rgba(255, 255, 255, 0.08);
            }

            @media (max-width: 991.98px) {
              .hero-2 {
                padding: 90px 0 40px;
              }
              .hero-3 {
                padding: 100px 0 20px;
              }
              .hero-4 {
                padding: 110px 0 20px;
              }
              .hero-6 .carousel .carousel-inner .carousel-item {
                height: auto;
                padding: 120px 0 80px;
              }
            }
            @media (max-width: 575.98px) {
              .subscribe-form .form-control {
                padding: 8px 64px 8px 50px;
              }
              .subscribe-form .form-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 8px;
                padding: 8px 14px;
              }
              .subscribe-form .form-btn span {
                display: none;
              }
              .subscribe-form .form-btn .download-icon {
                display: block;
              }
              .hero-6 .carousel .carousel-control-prev {
                top: auto;
                left: 10px;
                bottom: 20px;
              }
              .hero-6 .carousel .carousel-control-next {
                top: auto;
                right: 10px;
                bottom: 20px;
              }
            }
            @media (min-width: 768px) and (max-width: 991.98px) {
              .hero-5 {
                padding: 100px 0 420px;
              }
            }
            @media (max-width: 768px) {
              .hero-5 {
                padding: 100px 0 320px;
              }
              .hero-5-img {
                margin-top: -16rem;
              }
            }
            .work-box .work-icon {
              font-size: 56px;
              border-radius: 28% 72% 50% 50%/26% 20% 80% 74%;
              height: 96px;
              width: 96px;
              margin: 0 auto;
            }
            .work-box .work-arrow {
              position: absolute;
              right: -56px;
              top: 45%;
              width: 30%;
            }

            @media (max-width: 991.98px) {
              .work-box .work-arrow {
                display: none;
              }
            }
            .features-bg {
              background-image: url("../images/features-bg.png");
              background-size: cover;
              background-repeat: no-repeat;
              width: 100%;
            }

            .cta-bg {
              background-image: url("../images/counter-bg.jpg");
              background-size: cover;
              background-attachment: fixed;
              background-repeat: no-repeat;
              background-position: center;
              width: 100%;
            }

            .counter-content {
              background-color: rgba(255, 255, 255, 0.1);
              -webkit-backdrop-filter: blur(3px);
              backdrop-filter: blur(3px);
              padding: 20px;
              border-radius: 8px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 5px 20px rgba(52, 58, 64, 0.1);
            }

            .screen-slider {
              padding: 50px 0;
            }
            .screen-slider .swiper-slide {
              position: relative;
              border-radius: 8px;
              opacity: 0.3;
              transition: all 0.3s ease-in-out;
              border: 2px solid #eff1f5;
            }
            .screen-slider .swiper-slide img {
              border-radius: 8px;
            }
            .screen-slider .swiper-slide.swiper-slide-active {
              transform: scale(1.1);
              box-shadow: 0 5px 20px rgba(52, 58, 64, 0.1);
              opacity: 1;
            }
            .screen-slider .swiper-slide.swiper-slide-prev,
            .screen-slider .swiper-slide.swiper-slide-next {
              opacity: 0.8;
            }
            .screen-slider .swiper-pagination {
              bottom: -30px;
            }
            .screen-slider .swiper-pagination .swiper-pagination-bullet {
              background-color: #1f61eb;
              vertical-align: middle;
            }
            .screen-slider
              .swiper-pagination
              .swiper-pagination-bullet.swiper-pagination-bullet-active {
              height: 12px;
              width: 12px;
              border: 2px solid #fff;
              box-shadow: 0px 0px 0 1px #1f61eb;
            }

            .nav.pricing-tab {
              justify-content: center;
              display: table;
              margin: 0 auto;
              background-color: #eff1f5;
              border: 1px solid #e6e9ef;
              padding: 6px;
              border-radius: 50rem;
            }
            .nav.pricing-tab .nav-item {
              display: inline-block;
            }
            .nav.pricing-tab .nav-item .nav-link {
              border-radius: 50rem;
              color: #292e49;
              padding: 0.5rem 1.5rem;
            }
            .nav.pricing-tab .nav-item .nav-link.active {
              background-color: #1f61eb;
              color: #fff;
            }

            .pricing-box {
              background-color: #fff;
              box-shadow: 0 4px 8px rgba(52, 58, 64, 0.08);
              border-radius: 4px;
              padding: 50px;
              position: relative;
              overflow: hidden;
            }
            .pricing-box .pricing-badge {
              background-color: #eb1f52;
              color: #fff;
              font-size: 13px;
              padding: 2px 40px;
              text-transform: uppercase;
              position: absolute;
              top: 40px;
              right: -40px;
              transform: rotate(45deg);
              box-shadow: 0 2px 8px rgba(16, 22, 30, 0.3);
            }

            .faqs-accordion .accordion-item {
              border-bottom: none;
              margin-bottom: 12px;
              border-radius: 6px;
              box-shadow: 0 4px 8px rgba(52, 58, 64, 0.08);
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button {
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
              box-shadow: none !important;
              color: #343a40;
              font-size: 17px;
              font-weight: 500;
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button.collapsed {
              border-radius: 6px;
              color: #536976;
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button.collapsed:before {
              color: #536976;
              transform: rotate(0deg);
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button:focus {
              box-shadow: none;
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button::after {
              display: none;
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button:before {
              content: "\f0140";
              display: inline-block;
              font: normal normal normal 24px/1 "Material Design Icons";
              font-size: 22px;
              color: #343a40;
              position: absolute;
              right: 20px;
              transform: rotate(180deg);
              transition: all 0.3s ease-in-out;
            }
            .faqs-accordion
              .accordion-item
              .accordion-header
              .accordion-button:not(.collapsed) {
              background-color: #e6e9ef;
              color: #343a40;
            } /*# sourceMappingURL=style.css.map */
          `}
        </style>
      </>
      <Footer />
    </>
  );
};

export default Index;
