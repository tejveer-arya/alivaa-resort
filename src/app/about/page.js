"use client";
// import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import "../../app/styles/inner.css";
import { motion } from "framer-motion";
import HotelTab from '../components/HotelTab';

export default function AboutPage() {
 
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
                      <h2 className="global-heading">About Us</h2>
                      <p>Alivaa Hotels and Hoften Hotels offer two distinct yet exceptional experiences for travelers. Alivaa Hotels, a premium brand, delivers luxury and sophistication, with top-tier amenities, personalized service, and a focus on elegance and comfort. It's perfect for those who want a lavish escape with everything taken care of. On the other hand, Hoften Hotels, a mid-scale brand, provides a great balance of comfort and value. With modern facilities and a focus on convenience, it’s ideal for both business and leisure travelers seeking quality at an affordable price. Whether you're after indulgence or practicality, both brands promise a memorable stay.</p>
                  </div>
                </div>
            </motion.section>
            <HotelTab/>
      </>
    );
  }