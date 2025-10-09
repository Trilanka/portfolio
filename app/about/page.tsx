import AHero from "@/components/AHero";
import Alead from "@/components/Alead";
import ANavBar from "@/components/ANavBar";
import Aunique from "@/components/Aunique";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser } from "react-icons/fa";


export default function AboutPage() {
  return (
    <main className="relative bg-black min-h-screen overflow-hidden">
      {/* Subtle Light Beam Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main light beam from top */}
        <div className="absolute -top-40 -left-1/4 w-full h-96 bg-gradient-to-b from-white/5 via-white/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Secondary light beam from right */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-l from-white/4 via-white/2 to-transparent rounded-full blur-3xl"></div>
        
        {/* Accent light beam from bottom left */}
        <div className="absolute -bottom-40 -left-1/3 w-80 h-80 bg-gradient-to-t from-white/3 via-white/1 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Navigation */}
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />},
        {name: 'About', link: '/about', icon: <FaUser />},
        {name: 'Blog', link: '/blog', icon: <FaBlog />}
      ]} />

      {/* Content */}
      <div className="relative z-10">
        <AHero />
        <Aunique />
        <Alead />
      </div>
    </main>
  );
}


