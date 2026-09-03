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
          I am currently a Senior Applied Scientist at{" "}
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Microsoft
          </a>{" "}
          with the Office Products Group. I conduct Responsible AI research to
          identify, measure, and mitigate risks in AI-powered productivity
          experiences, spanning safety, fairness, transparency, and
          human-centered evaluation.
        </p>
        <p>
          Prior to this, I finished my PhD at{" "}
          <a
            href="https://www.gatech.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Georgia Tech
          </a>
          , where I was advised by{" "}
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
          . My research focused on how people understand, trust, and collaborate
          with AI in complex, multi-agent settings, drawing on cognitive
          science, human factors, and sociotechnical evaluation.
        </p>
        <p>
          This work has been published and recognized across leading AI, HCI, and human factors venues.
        </p>
        <p>
          I also have experience in building end-to-end deep learning (NLP, Computer Vision, and Reinforcement learning) pipelines. Through applied research roles at{" "}
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
          , my work spans dataset creation, model development, experiments and ablations, and performance evaluation and benchmarking.
        </p>
        <p>
          I&apos;m driven to build reliable, interpretable, and human-centered AI systems grounded in real-world impact.
        </p>
      </div>

      <Timeline />
    </motion.section>
  );
}
