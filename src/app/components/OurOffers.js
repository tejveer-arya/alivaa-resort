'use client';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });


const OurOffers = () => {
//   useEffect(() => {
//     new Swiper('.swiper', {
//       loop:true,
//       slidesPerView: 3,
//       spaceBetween: 10,
//       navigation: true,
//       pagination: { clickable: true },
//     });
//   }, []);
// const swiperRef = useRef(null);
  const allSwiperRef = useRef(null);
  const alivaaSwiperRef = useRef(null);
  const hoftenSwiperRef = useRef(null);
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    if (allSwiperRef.current) {
      new Swiper(allSwiperRef.current, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        //  breakpoints: {
//         0: { slidesPerView: 1, spaceBetween: 0 },
//         600: { slidesPerView: 1, spaceBetween: 0 },
//         1000: { slidesPerView: 2, spaceBetween: 0 },
//         1200: { slidesPerView: 2.5, spaceBetween: 0 },
//         1400: { slidesPerView: 3, spaceBetween: 0 },
//         1600: { slidesPerView: 3, spaceBetween: 0 },
//         1800: { slidesPerView: 3, spaceBetween: 0 },
//       },
        // pagination: { el: ".swiper-pagination", clickable: true },
        pagination: false,
        modules: [Navigation, Pagination, Autoplay],
      });
    }

    if (alivaaSwiperRef.current) {
      new Swiper(alivaaSwiperRef.current, {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
         // pagination: { el: ".swiper-pagination", clickable: true },
         pagination: false,
        modules: [Pagination, Autoplay],
      });
    }

    if (hoftenSwiperRef.current) {
      new Swiper(hoftenSwiperRef.current, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
         // pagination: { el: ".swiper-pagination", clickable: true },
         pagination: false,
        modules: [Pagination, Autoplay],
      });
    }
}
  }, []);
  

  return (
    <motion.section className="our-offers about-us mt-8" 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6,  delay:0.12 }}>
        <div className="container mt-4">
        <div className="new-rj-block">
          <h4 className="global-heading text-center">Our Offers</h4>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab">All</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="alivaa-tab" data-bs-toggle="tab" data-bs-target="#alivaa" type="button" role="tab">Alivaa</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="hoften-tab" data-bs-toggle="tab" data-bs-target="#hoften" type="button" role="tab">Hoften</button>
            </li>
        </ul>
        
        <div className="tab-content mt-3" id="myTabContent">
            <div className="tab-pane fade show active" id="all" role="tabpanel">
                <div className="swiper offers-slider" ref={allSwiperRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/images/our-offers/alivaa-new-offer-imgg-1.webp" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Introductory Offer</h4>
                                    <p className="offer-description">
                                    25% off on Best Available Rate 
                                    </p>
                                </div>

                                <a href="gurugram-hotel-offers.php" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name">Executive Package </h4>
                                    <p className="offer-description">
                                    Up to 50% Off on Best Available Rate
                                    </p>
                                </div>
                                <a href="gurgaon-hotel-offers.php#introductory-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Introductory Offer</h4>
                                    <p className="offer-description">
                                    25% off on Best Available Rate 
                                    </p>
                                </div>

                                <a href="gurugram-hotel-offers.php" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/offer-img-4.jpg" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Relax with a Staycation</h4>
                                    <p className="offer-description">
                                        Free breakfast, Flexible check-in &amp; check-out
                                    </p>
                                </div>
                                <a href="gurgaon-hotel-offers.php#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                        </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

            <div className="tab-pane fade" id="alivaa" role="tabpanel">
                <div className="swiper offers-slider" ref={alivaaSwiperRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/images/our-offers/offer-img-4.jpg" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Introductory Offer</h4>
                                    <p className="offer-description">
                                    25% off on Best Available Rate 
                                    </p>
                                </div>

                                <a href="gurugram-hotel-offers.php" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name">Executive Package </h4>
                                    <p className="offer-description">
                                    Up to 50% Off on Best Available Rate
                                    </p>
                                </div>
                                <a href="gurgaon-hotel-offers.php#introductory-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/alivaa-new-offer-imgg-1.webp" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Relax with a Staycation</h4>
                                    <p className="offer-description">
                                        Free breakfast, Flexible check-in &amp; check-out
                                    </p>
                                </div>
                                <a href="gurgaon-hotel-offers.php#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

            <div className="tab-pane fade" id="hoften" role="tabpanel">
                <div className="swiper offers-slider" ref={hoftenSwiperRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Introductory Offer</h4>
                                    <p className="offer-description">
                                    25% off on Best Available Rate 
                                    </p>
                                </div>

                                <a href="gurugram-hotel-offers.php" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name">Executive Package </h4>
                                    <p className="offer-description">
                                    Up to 50% Off on Best Available Rate
                                    </p>
                                </div>
                                <a href="gurgaon-hotel-offers.php#introductory-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Relax with a Staycation</h4>
                                    <p className="offer-description">
                                        Free breakfast, Flexible check-in &amp; check-out
                                    </p>
                                </div>
                                <a href="gurgaon-hotel-offers.php#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/images/our-offers/alivaa-new-offer-imgg-1.webp" className="img-fluid" alt="Alivaa Images" />
                            <div className="text-center">
                                <div className="offers-text-home">
                                    <h4 className="offer-name"> Introductory Offer</h4>
                                    <p className="offer-description">
                                    25% off on Best Available Rate 
                                    </p>
                                </div>

                                <a href="gurugram-hotel-offers.php" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
        </div>
    </motion.section>
  );
};

export default OurOffers;