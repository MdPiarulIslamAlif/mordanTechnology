import React from 'react';
import { motion } from "framer-motion";
import banner from "../../assets/bannerImg/baner1 (3).jpg"

const SecondWirelessSection = () => {
    return (
      <div
        className=" max-w-7xl mx-auto  flex flex-col md:flex-row lg:flex-row justify-center mt-24 gap-8 items-center
       
      "
      >
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 0.1 }}
          // viewport={{ once: true }}
          className=" "
        >
          <img className="max-h-96 w-96 rounded-2xl" src={banner} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 0.1 }}
          // viewport={{ once: true }}
          className=""
        >
          <h1 className="text-3xl font-bold mb-4">Wireless Headphones</h1>
          <div className="ml-8">
            <li>Carrying Case</li>
            <li>Seven Wireless HeadPhones</li>
            <li>Quick Start Guide</li>
            <li>USB Charging Cable</li>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-accent">Buy Online</button>
          </div>
        </motion.div>
      </div>
    );
};

export default SecondWirelessSection;