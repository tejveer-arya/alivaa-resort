"use client";
// import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import "../../app/styles/inner.css";
import { motion } from "framer-motion";
import SpecialOffers from '../components/SpecialOffers';

export default function SpecialofferPage() {
 
    return (
      <>
      <section className="banner-section">
        <video 
          playsInline 
          autoPlay 
          loop 
          muted 
          width="100%" 
          className="banner-img myvideo web-video"> 
          <source src="/images/new-home-video.mp4" type="video/mp4" />
        </video>
        {/* <div className="content-section">
          <div className="container position-relative">
            <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
              <Link href="/"
                className="btn desktop-button corporatebannerbutton" id="book-now1">
                  <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
              </Link>
            </div>
          </div>
        </div> */}
      </section>
      <BookingForm />
            <motion.section className="search-content about-us new-rj-block text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}>
                <div className="container">
                  <div className="center">
                      <h2 className="global-heading">Special Offers</h2>
                      <p>Our exclusive offers are designed to give you the best value. Whether you're looking for a luxurious getaway, a fashion upgrade, or special lifestyle experiences, our Offers Page brings you the best discounts and packages to enhance your journey with us.</p>
                  </div>
                </div>
            </motion.section>
            {/* <HotelTab/> */}
            <SpecialOffers/>
      </>
    );
  }