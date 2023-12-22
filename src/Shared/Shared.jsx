import { motion } from "framer-motion";


const Shared = () => {
    
    const container = {
    hidden:{
        y:100,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        Transition:{
            duration:2,
            dealy:0.5,
        }
    }
    }

    
    
    return (
      <motion.div
        variants={container}
        initial="hidden"
        //animat="show"
        whileInView="show"
      ></motion.div>
    );
};

export default Shared;