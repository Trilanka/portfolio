import AHero from "@/components/AHero";
import Alead from "@/components/Alead";
import ANavBar from "@/components/ANavBar";
import Aunique from "@/components/Aunique";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser } from "react-icons/fa";


export default function AboutPage() {
  return (
    <main className="relative bg-black-100 min-h-screen">
      {/* Navigation */}
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />},
        {name: 'About', link: '/about', icon: <FaUser />},
        {name: 'Blog', link: '/blog', icon: <FaBlog />}
      ]} />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-screen bg-gradient-to-r from-purple/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-10 md:-right-32 md:-bottom-20 h-screen w-screen bg-gradient-to-l from-pink-300/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AHero />
        <Aunique />
        <Alead />
      </div>
    </main>
  );
}


