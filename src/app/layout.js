'use client';
// import { Geist, Geist_Mono } from "next/font/google";

// Import required css libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'font-awesome/css/font-awesome.min.css';
// import 'animate.css/animate.min.css';
import "../app/styles/globals.css";
import "../app/styles/sideheader.css";
import "../app/styles/main.css";

// Import required JavaScript libraries
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'swiper/swiper-bundle.min.js';
// import 'owl.carousel';
// import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import 'animate.css';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';



dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export default function RootLayout({ children }) {

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //   AOS.init({ offset: 200, duration: 600, easing: 'ease-in-out', once:true});
  //   }
  // }, []);

  return (
    <html lang="en">
      <body>
      <Navbar/>
      
        <main>{children}</main>

        <footer>
            <article className="container" style={{ width: "100%" }}>
              <div className="row">
                {/* Explore Section */}
                
                <motion.div className="col-lg-2 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}>
                  <h4>Explore</h4>
                  <ul className="f-links">
                    <li><a href="https://www.alivaahotels.com/">Home</a></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/special-offers">Special Offers</Link></li>
                    <li><Link href="/blog">Blogs</Link></li>
                    <li><Link href="/contactus">Contact Us</Link></li>
                    <li><Link href="/privacy-policy#privacy_policy">Policies</Link></li>
                  </ul>
                </motion.div>

                {/* Our Brands Section */}
                <motion.div className="col-lg-3 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                  <h4>Our Brands</h4>
                  <ul className="f-links">
                    <li><Link href="/gurgaon-hotel">Alivaa Hotels & Resorts</Link></li>
                    <li><Link href="/gurugram-hotel">Hoften Hotels</Link></li>
                  </ul>
                  </motion.div>

                {/* Social Media Section */}
                <motion.div className="col-lg-3 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                  <div className="ftr-social-section" style={{ marginTop: "0" }}>
                    <h4>Follow us</h4>
                    <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/fb-icon.svg" height={23} width={23} alt="Facebook" className="social-icon" />
                    </a>
                    <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/instagram-icon.svg" height={23} width={23} alt="Instagram" className="social-icon" />
                    </a>
                    <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/linkedin-icon.svg" height={23} width={23} alt="LinkedIn" className="social-icon" />
                    </a>
                    <br />
                    <Link href="/">
                      <Image src="/images/alivaa-logo1.webp" alt="Alivaa Logo" width={120} height={92} />
                    </Link>
                  </div>
                  </motion.div>

                {/* Contact Section */}
                <motion.div className="col-lg-4 col-sm-6" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                  <h4>Contact</h4>
                  <p className="footer-link ftr-location">
                    <img src="/images/map-icon.svg" alt="Map Icon" className="map-marker social-icon" width={38} height={38} />
                    <a href="https://www.google.com/maps/place/Alivaa+Hotel+Gurugram+Sohna+Road+City+Center/@28.418488,77.040279,16z/data=!4m9!3m8!1s0x390d229c15fbf0c5:0x14ca65f09ab743f!5m2!4m1!1i2!8m2!3d28.4191081!4d77.0409676!16s%2Fg%2F11vzccjb12?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                      Alivaa Hotel Gurugram Sohna Road City Center
                    </a>
                  </p>
                  <p className="footer-link">
                    <img src="/images/phone-icon.svg" alt="Phone Icon" className="social-icon" width={18} height={18} />
                    <a href="tel:+911244170000">+91 124 4170000</a>
                  </p>
                  <p className="footer-link">
                    <img src="/images/mail-icon.svg" alt="Mail Icon" className="social-icon" width={18} height={18} />
                    <a href="mailto:stayalive@alivaahotels.com">stayalive@alivaahotels.com</a>
                  </p>
                </motion.div>
              </div>
            </article>

            {/* Dynamic Copyright Year */}
            <span className="bottom-footer">
              Copyright © {new Date().getFullYear()} The Alivaa Hotels & Resorts. All rights reserved by Liberate Hotels and Resorts Private Limited.
            </span>
          </footer>
      </body>
    </html>
  );
}






















