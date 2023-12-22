import React from 'react';

const Shared = () => {
    
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      },
    };

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    };

    
    
    return (
        <div>
            variants={container}
            initial="hidden"
            whileInView="show"
        </div>
    );
};

export default Shared;