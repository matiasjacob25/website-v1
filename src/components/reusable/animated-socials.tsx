'use client';

import { motion, scale, easeOut } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function AnimatedSocials() {
  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={container}
      className="flex flex-row space-x-4"
    >
      <motion.a
        variants={item}
        href="https://github.com/matiasjacob25"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <FaGithub size={28} color="#1DA1F2" />
      </motion.a>
      <motion.a
        variants={item}
        href="https://www.linkedin.com/in/jacobmatias"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <FaLinkedin size={28} color="#1DA1F2" />
      </motion.a>
      <motion.a
        variants={item}
        href="mailto:matias.jacob2505@gmail.com"
        aria-label="Email"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <FaEnvelope size={28} color="#1DA1F2" />
      </motion.a>
      <motion.a
        variants={item}
        href="https://open.spotify.com/user/22sigughpg36bat3lsgfzz2ri?si=b3c8801506bb4f6b"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <FaSpotify size={28} color="#1DA1F2" />
      </motion.a>
    </motion.div>
  )
}