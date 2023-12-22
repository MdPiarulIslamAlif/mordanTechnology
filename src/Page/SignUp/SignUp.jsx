import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </motion.div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <motion.form
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, delay: 0.1 }}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
