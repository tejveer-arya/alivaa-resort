'use client';

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
// import Link from "next/link";


const OurBrands = () => {
    const brandswiperRef = useRef(null);
  
    useEffect(() => {
      if (!brandswiperRef.current) return;
  
      new Swiper(brandswiperRef.current, {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 0 },
          600: { slidesPerView: 1, spaceBetween: 0 },
          1000: { slidesPerView: 1, spaceBetween: 0 },
          1200: { slidesPerView: 1, spaceBetween: 0 },
          1400: { slidesPerView: 1, spaceBetween: 0 },
          1600: { slidesPerView: 1, spaceBetween: 0 },
          1800: { slidesPerView: 1, spaceBetween: 0 },
        },
        modules: [Navigation],
      });
    }, []);
  
    return (
        
        <motion.section className="our-brands experience-section about-us new-our-brands"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6,  delay:0.12 }} style={{ marginTop: "3rem" }}>
            <div className="container">
            <div className="new-rj-block">
                <h4 className="global-heading text-center">Our Brands</h4>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="swiper offers-slider" ref={brandswiperRef}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="new-bg-block">
                                        <div className="inner alivaa-bg">
                                        <p className="category-image">
                                            <img src="/images/alivaa-logo1.webp" alt="Alivaa Logo" />
                                        </p>
                                        </div>
                                        <div className="brand-new-content">
                                        <p>
                                            Alivaa Hotels & Resorts is a premium hotel that redefines the art of hospitality. We are a
                                            Luxury, Fashion, and Lifestyle Brand that offers unmatched luxury, comfort, and exceptional
                                            service. Our rooms are designed with elegance and sophistication, equipped with modern amenities.
                                            Whether for business or leisure, we provide the perfect escape.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="new-bg-block">
                                        <div className="inner hoften-bg">
                                            <p className="category-image">
                                                <img src="/images/hoften-logo1.png" alt="Hoften Logo" />
                                            </p>
                                        </div>
                                        <div className="brand-new-content">
                                            <p>
                                                Hoften Sukh Vasa, Gurugram is where comfort, quality, and value create the ultimate hospitality
                                                experience. Designed for both leisure and business travelers, our hotel provides easy access to
                                                major business districts, shopping malls, and entertainment hubs in Gurugram. Whether for a short
                                                business trip or an extended stay, we ensure your experience is stress-free and memorable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Navigation Arrows */}
                            <div className="swiper-nav">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>  
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            </div>
      </motion.section>
    );
  };

  export default OurBrands;


