"use client";
import Link from 'next/link';
import BookingForm from './components/BookingForm';
import AboutUs from './components/AboutUs';
import ExperienceSlider from "./components/ExperienceSlider";
import OurOffers from './components/OurOffers';
import OurBrands from './components/OurBrands';
import { motion } from "framer-motion";


// import { useEffect } from "react";

// import "animate.css"; 



export default function HomePage() {
 
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
    
  </section>
  <BookingForm />
  <AboutUs />
  
  <section className="your-break about-us sec-padding">
        <div className="container">
            <div className="new-rj-block" style={{ marginTop: "3rem" }}>
              <h4 className="global-heading text-center">Our Hotels</h4>
            </div>
            <div className="winter-sec" style={{ marginTop: "3rem" }}> 
                <div className="row">
                    <motion.div
                      className="col-md-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay:0.8 }}>
                        <div className="winter-box">
                            <img src="images/new-alivaa-facade.webp" alt="winter image" className="w-100 primary-radius" />
                            <div className="winter-box-content carddd">
                                <h3 className="winter-box-heading">Alivaa Hotel, Gurugram</h3>
                                <p className="winter-box-para card-texttt">We are a luxury, fashion, and lifestyle brand that is not just part of the hotel business but is a statement of individuality, artistic expression, and the vibrant essence of life.</p>
                                <Link href="/" className="read-more-btnnn">Read more</Link>
                                <div className="winter-box-btn">
                                    <Link href="/" className="box-btn know-more">Explore More</Link>
                                    <Link href="/" className="box-btn book-noww">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                      className="col-md-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6,  delay:0.8}}>
                        <div className="winter-box">
                            <img src="images/hoften-new-fcd-1.webp" alt="winter image" className="w-100 primary-radius" />
                            <div className="winter-box-content carddd">
                                <h3 className="winter-box-heading">Hoften Sukh Vasa, Gurugram</h3>
                                <p className="winter-box-para card-texttt">In an industry that often loses sight of genuine hospitality, Hoften Hotels—short for "Hotel for Often Stays"—is redefining the guest experience.</p>
                                <Link href="/" className="read-more-btnnn">Read more</Link>
                                <div className="winter-box-btn">
                                <Link href="/" className="box-btn know-more">Explore More</Link>
                                <Link href="/" className="box-btn book-noww">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                      className="col-md-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6,  delay:0.8 }}>
                        <div className="winter-box">
                            <img src="images/corebett-new-image.webp" alt="winter image" className="w-100 primary-radius" />
                            <div className="winter-box-content carddd">
                                <h3 className="winter-box-heading">Alivaa Jungle Resort, Corbett</h3>
                                <p className="winter-box-para card-texttt">Nestled amidst the serene landscapes of Corbett, Alivaa Hotels invites you to experience a harmonious blend of luxury and nature.</p>
                                <Link href="/" className="read-more-btnnn">Read more</Link>
                                <div className="winter-box-btn">
                                    <Link href="/" className="box-btn know-more tooltipp" title="coming soon">Explore More<span className="tooltiptextt">Coming soon</span></Link>

                                    <Link href="/" className="box-btn book-noww tooltipp" title="coming soon">Book Now<span className="tooltiptextt">Coming soon</span></Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>
      <ExperienceSlider />
      <OurOffers />
      <OurBrands />
      
      <motion.section className="experience-section about-us media-n-news media-news"
      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay:0.14 }}>
        <div className="container">
          <div className="new-rj-block">
            <h4 className="global-heading text-center">Media & News</h4>
          </div>
            <div className="row media-box">
                      
                      <div className="col-lg-4 col-md-4">
                          <div className="media-item">
                              <img src="images/media-1-image.cms" className="w-100" alt="media-1"/>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                          <div className="media-item">
                              <img src="images/media-image-1.jpg" className="w-100" alt="media-1"/>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                          <div className="media-item">
                              <img src="images/media-image-2.jpg" className="w-100" alt="media-1"/>
                          </div>
                      </div>
                      
                  </div>
          
          </div>
    </motion.section>

  </>
  );
}


