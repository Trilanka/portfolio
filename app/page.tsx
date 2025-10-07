
import Projects from "@/components/Projects";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser } from "react-icons/fa";
import Footer from "@/components/Footer";
import Techstack from "@/components/Techstack";

export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />},
        {name: 'About', link: '/about', icon: <FaUser />},
        {name: 'Blog', link: '/blog', icon: <FaBlog />}
      ]} />
      <Hero/>
      {/* <Grid /> */}
      {/* <RecentProjects /> */}
      {/* <Clients /> */}
      <Projects />
      {/* <Leadership /> */}
      <Techstack />
      <Footer />
    </div>
  </main>
  );
}
