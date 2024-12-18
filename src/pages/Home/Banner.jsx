import React from "react";
import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/team01.jpg";
import team2 from "../../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] rounded-lg border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] rounded-lg border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50, color: "green" }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["red", "yellow"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            News!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
