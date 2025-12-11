"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Services
      </motion.h2>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Reviewer
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>International Journal of Human Computer Interaction</li>
            <li>ACM Conference on Human Factors in Computing Systems (ACM CHI)</li>
            <li>Human Factors and Ergonomics Society (HFES)</li>
            <li>Book: Advancements in Human Agent Teaming Research Infrastructure: Testbeds, Metrics, & Concepts.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Leadership Activities
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Session Chair for presentation track "Innovations in Research Methods" at the ASPIRE, 69th International Annual Meeting of the Human Factors and Ergonomics Society (HFES), Chicago, USA 2025</li>
            <li>Panel Discussion Moderator at ASPIRE, 69th International Annual Meeting of the Human Factors and Ergonomics Society (HFES), Chicago, USA 2025</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Researcher in Social Action Research at Georgia Institute of Technology (Fall 2025)
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Successfully completed a social action research program involving deep inquiry, qualitative observation, and real-world evaluation. Collaborated with a research team to identify opportunities to enhance the graduate student experience at Georgia Tech and developed actionable recommendations aimed at creating positive campus-level social impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

