import Footer from "@/components/reusable/footer";
import Navbar from "@/components/navbar";
import SocialBar from "@/components/social-bar";
import Home from "@/components/root/home";
import About from "@/components/root/about";
import Experience from "@/components/root/experience";
import Projects from "@/components/root/projects";
import Skills from "@/components/root/skills";
import ScrollToTop from "@/components/utilities/scroll-to-top";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* utility component to scroll to top on page load/reload */}
      <Navbar />
      <SocialBar />
      {/* Sections */}
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}
