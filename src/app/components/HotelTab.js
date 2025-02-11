'use client';
import { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });


const OurOffers = () => {
//   const alivaSwiperRef = useRef(null);
//   const hofenSwiperRef = useRef(null);
  

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//         import('bootstrap/dist/js/bootstrap.bundle.min.js');
//     if (alivaSwiperRef.current) {
//       new Swiper(alivaSwiperRef.current, {
//         loop: true,
//         slidesPerView: 3,
//         spaceBetween: 10,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//           },
       
//         pagination: false,
//         modules: [Navigation, Pagination, Autoplay],
//       });
//     }

//     if (hofenSwiperRef.current) {
//       new Swiper(hofenSwiperRef.current, {
//         loop: true,
//         slidesPerView: 2,
//         spaceBetween: 10,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//           },
//          pagination: { el: ".swiper-pagination", clickable: true },
//          pagination: false,
//         modules: [Pagination, Autoplay],
//       });
//     }

   
// }
//   }, []);
useEffect(() => {
    if (typeof window !== 'undefined') {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
    }, []);

  return (
 
    <motion.section className="ourbrand our-offers about-us mt-8"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.10}}>
        <div className="container mt-4">
        <div className="new-rj-block">
          <h4 className="global-heading text-center">Our Brands</h4>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#aliva" type="button" role="tab">Alivaa Hotels</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="alivaa-tab" data-bs-toggle="tab" data-bs-target="#hoften" type="button" role="tab">Hoften Hotels</button>
            </li>
        </ul>
        
        <div className="tab-content mt-3" id="myTabContent">
            <div className="tab-pane fade show active" id="aliva" role="tabpanel">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="alivaa-pagecontent">
                            <h2 className="global-heading text-center">Alivaa Hotels & Resorts</h2>
                            <p>Located in the heart of Gurgaon, Alivaa Hotels & Resorts offers our guests a perfect blend of modern luxury and impressive service. Whether you are here for business or leisure, we make sure to provide you a peaceful escape while being just minutes away from the bustling city center. The property features elegant rooms along with modern amenities, and personalized services to ensure that your stay is both comfortable and memorable with us. For added facility, indulge in gourmet dining options, or rejuvenate with our spa and wellness offerings.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="aliva-image">
                            <img src="/images/aboutus/alivaa-facade.jpg" className="img-fluid" alt="alivaa-image" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="tab-pane fade" id="hoften" role="tabpanel">
            <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="alivaa-pagecontent">
                            <h2 className="global-heading text-center">Hoften Hotels</h2>
                            <p>Hoften Hotels in Gurugram offers the perfect blend of comfort, quality, and value, making it the ideal choice for both business and leisure travelers. With its contemporary design and modern amenities, Hoften provides a relaxing and convenient stay in one of the most dynamic cities in India. Located near major business districts, shopping malls, and popular attractions, our hotel offers easy access to everything Gurugram has to offer. At Hoften, we are committed to delivering exceptional service at a competitive price, offering you a perfect balance of comfort and convenience for your stay in Gurugram.</p>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="aliva-image">
                            <img src="/images/aboutus/hoften-facade.webp" className="img-fluid" alt="hoften-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </motion.section>
  );
};

export default OurOffers;