import design from "../../assets/wir/Design.jpg"
import { motion } from "framer-motion";


const DesignSection = () => {

    return (
      <div className="mt-24 max-w-screen-xl mx-auto">
        <div
          className="hero min-h-[550px] rounded-2xl"
          style={{
            backgroundImage: `url(${design})`,
          }}
        >
          <div className="hero-overlay bg-black/60 rounded-2xl"></div>
          <div className="hero-content text-start text-neutral-content">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{duration:5, delay: 0.3}}
              viewport={{once: true}}
             
            
              className="max-w-md"
            >
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Designed for your comfort Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo dolor sit amet consectetur
                adipiscing luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="btn btn-primary">Show More</button>
            </motion.div>
          </div>
        </div>
      </div>
    );
};

export default DesignSection;