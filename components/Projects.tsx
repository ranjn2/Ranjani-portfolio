"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Human-AI Collaborative Diagnostics",
    category: "Research",
    technologies: ["Python", "RAG", "LLM-Assisted Decision Making"],
    description: "Investigates how human medical experts interact with LLM-based AI advice in diagnostic settings. Explores expert-AI collaboration where AI serves as an adjunct to human expertise, combining AI's pattern recognition capabilities with human intuition and experience. Focuses on in-the-loop expert engagement in critical medical decision-making, addressing complex factors including patient data integration, variability, and social/legal considerations in healthcare AI adoption.",
    github: "https://github.com/ranjn2/Human-AI-Collaborative-Decision-Making",
  },
  {
    title: "Generative Adversarial Reinforcement Learning",
    category: "Research",
    technologies: ["Python", "PyTorch", "Gym"],
    description: "Implemented a Generative adversarial RL algorithm which is a model free algorithm on the HalfCheetah-v2 gym environment. The core idea consists of extracting expert policy data to yield expected benchmark rewards. Used Trust Region Policy Optimization to overcome the non-monotonicity problem during training.",
    github: "https://github.com/ranjn2/gail-trpo",
  },
  {
    title: "GANs and VAE to Model Multimodal Distribution",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "Implemented Variational Autoencoders and DC-GANs for the FashionMNIST and STL-10 datasets. Used FID and IS loss functions for training and objective performance evaluation.",
    github: "https://github.com/ranjn2/vae-gan-image-generation",
  },
  {
    title: "CycleGAN for Image-to-Image Translation",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "PyTorch implementation of CycleGAN for unpaired image-to-image translation on the Edges2Shoes dataset. Enables learning mappings between edge sketches and shoe images without paired data. Includes training scripts, evaluation metrics (FID and IS), and preprocessed dataset utilities for experimentation.",
    github: "https://github.com/ranjn2/cycle-gan",
  },
  {
    title: "Learning Object Pose from UAV Motion",
    category: "Research",
    technologies: ["Python", "Unity3D", "PyTorch"],
    description: "Developed a synthetic dataset of 2D images generated from UAV interaction within a Unity3D simulation environment. Implemented domain randomization for augmenting the dataset and improving model robustness. Methods consisted of transfer learning and benchmarking across different image neural nets.",
    github: "https://github.com/ranjn2/pose-estimation",
  },
  {
    title: "Object Detection using YOLOv1",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "Implementation of YOLOv1 for real-time object detection, trained on a dataset of 10K street-scene images with labeled objects. Includes grid-based predictions, bounding-box decoding, Non-Maximum Suppression (NMS), and a full training/evaluation pipeline for reproducible results.",
    github: "https://github.com/ranjn2/yolo-realtime-object-detection",
  },
  {
    title: "Faster RCNN",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "End-to-end implementations of Region Proposal Network (RPN), Faster R-CNN, and Mask R-CNN for object detection and instance segmentation on a multi-class, multi-object image dataset containing Vehicles, People, and Animals. Includes simplified RPN implementation without FPN, pretrained FPN-backed RPN, and full detector heads for training, evaluation, and visualization on 3,265 images.",
    github: "https://github.com/ranjn2/RPN-and-Faster-RCNN",
  },
  {
    title: "Image Segmentation using SOLO",
    category: "Research",
    technologies: ["Python", "PyTorch"],
    description: "End-to-end implementation of SOLO (Segmenting Objects by Locations), a real-time and single-shot instance segmentation model. Detects and segments three types of objects: Vehicles, People, and Animals. Includes data preprocessing, Feature Pyramid Network (FPN) visualization, model training on 3,265 images, and evaluation pipelines with predicted segmentation masks and bounding boxes.",
    github: "https://github.com/ranjn2/solo-instance-segmentation",
  },
  {
    title: "Deep Learning Based Authorship Identification",
    category: "Research",
    technologies: ["Python", "PyTorch", "LSTM", "GRU"],
    description: "End-to-end multi-class classification pipeline for authorship of corporate news articles (C50 and Reuters datasets) using LSTM, Bi-LSTM, and GRU across sentence and article levels.",
    github: "https://github.com/arthtalati/Deep-Learning-based-Authorship-Identification",
  },
]

export default function Projects() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Projects
      </motion.h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-blue-600">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors flex-shrink-0 mt-1"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
              <div className="mb-2">
                <span className="text-slate-600">
                  {project.technologies.join(", ")}
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

