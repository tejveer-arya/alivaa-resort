'use client'; 
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const fullText = `Surrounded by life and art, we are much more than a hotel—we are a luxury, fashion, and lifestyle brand. The concept of Alivaa Hotels originated from the idea of change and enhancing a lifestyle through the hospitality sector. Alivaa is one of the finest hotels in Sohna Road, Gurgaon, where luxury assures impeccable and noteworthy service of guests. Here, supreme comfort coupled with the highest level of sophistication awaits. 
  We understand what our guest is seeking while booking a stay. People wish for an atmosphere that resonates with lifestyle, and we strive to offer great services approaching the individual needs of each guest. From the moment you walk in, you will be enveloped in a warm atmosphere, making your experience truly unforgettable.`;

  const charLimit = 200; 
  const [isExpanded, setIsExpanded] = useState(false); 

  return (
    <section className="search-content about-us new-rj-block" id="alivaa-about-us">
      <article className="container">
      
        <motion.div
          className="col-lg-12 text-center about-conteeent"
          initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
        >
          <h1 className="global-heading">Welcome to Alivaa Hotels & Resorts</h1>
          <p className="content-boxx" id="ccontent">
            {isExpanded ? fullText : fullText.slice(0, charLimit) + "... "}
            <button
              className="read-more-btnn text-blue-600 underline ml-2"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </p>
          <h4 className="stay-alive-title">Stay Alive</h4>
        </motion.div>
      </article>
    </section>
  );
}
