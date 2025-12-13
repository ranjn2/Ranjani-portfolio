"use client";

import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16"
    >
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          I&apos;m a PhD Candidate at{" "}
          <a
            href="https://www.gatech.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Georgia Tech
          </a>
          , advised by{" "}
          <a
            href="https://ae.gatech.edu/directory/person/karen-m-feigh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Prof. Karen Feigh
          </a>{" "}
          at the{" "}
          <a
            href="https://cec.gatech.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Cognitive Engineering Center
          </a>
          . My research focuses on how people understand, trust, and collaborate with AI in complex, multi-agent settings, drawing on cognitive science, human factors, and sociotechnical evaluation. This work has been published and recognized across leading AI, HCI, and human factors venues.
        </p>
        <p>
          I also have experience in building end-to-end deep learning (NLP, Computer Vision, and Reinforcement learning) pipelines. Through Applied research roles at{" "}
          <a
            href="https://www.geaerospace.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            GE Aerospace Research
          </a>{" "}
          and{" "}
          <a
            href="https://www.autodesk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Autodesk
          </a>
          , I have developed proof-of-concept methods to enhance LLM reasoning, evaluate RAG inconsistencies, and benchmark models for scientific tasks. My work spans dataset creation, model development, experiments and ablations, and performance evaluation. I&apos;m driven to build reliable, interpretable, and human-centered AI systems grounded in real-world impact.
        </p>
      </div>

      <Timeline />
    </motion.section>
  );
}
