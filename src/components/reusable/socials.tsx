import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa'

export default function Socials() {
  return (
    <>
      <a
        href="https://github.com/matiasjacob25"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaGithub size={28} color="#1DA1F2" />
      </a>
      <a
        href="https://www.linkedin.com/in/jacobmatias"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaLinkedin size={28} color="#1DA1F2" />
      </a>
      <a
        href="mailto:matias.jacob2505@gmail.com"
        aria-label="Email"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaEnvelope size={28} color="#1DA1F2" />
      </a>
      <a
        href="https://open.spotify.com/user/22sigughpg36bat3lsgfzz2ri?si=b3c8801506bb4f6b"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaSpotify size={28} color="#1DA1F2" />
      </a>
    </>
  )
}