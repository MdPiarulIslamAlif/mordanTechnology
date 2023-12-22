import React from 'react';
import { motion } from "framer-motion";


const SingleData = ({product}) => {
    const {id, name, price, photo } = product;
    return (
      <motion.div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className='h-[200px] w-full' src={photo} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand: {name}</h2>
            <h2 className="card-title">Price: {price}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </motion.div>
    );
};

export default SingleData;