"use client";

import { motion } from "framer-motion";

export default function Teaching() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Teaching
      </motion.h2>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Graduate Teaching Assistant at Georgia Institute of Technology
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Feedback Control Systems (ECE 3550, Undergraduate) - Spring 2022</li>
            <li>Circuit Analysis (ECE 2040, Undergraduate) - Fall 2021</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Graduate Teaching Assistant at University of Pennsylvania
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Engineering Electromagnetics (ESE 112, Undergraduate) - Spring 2021</li>
            <li>Feedback Control Systems (ESE 505, Graduate) - Spring 2021</li>
            <li>Linear, Non-Linear and Integer Optimization (OIDD 910, Graduate) - Fall 2020</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

