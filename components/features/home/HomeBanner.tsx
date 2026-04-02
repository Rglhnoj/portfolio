import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export function HomeBanner() {
  const socials = [
    { name: "Github", icon: <FaGithub className="h-5 w-5" />, link: "https://github.com/rglhnoj" },
    { name: "Linkedin", icon: <FaLinkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/recuerdo-john-rigel-82155037b/" },
    { name: "Mail", icon: <Mail className="h-5 w-5" />, link: "mailto:recuerdojohnrigel@Gmail.com" },
    { name: "Facebook", icon: <FaFacebook className="h-5 w-5" />, link: "https://www.facebook.com/johnrigelrecuerdo" }
  ];
return (
    <Section className="grid lg:grid-cols-2 gap-12 items-center py-24 bg-white dark:bg-slate-950 dark:text-white transition-colors duration-300">
      
      {/* Left Content */}
      <div className="flex flex-col items-start space-y-8 px-6 md:px-20">

        {/* Availability Badge - Refined colors for Dark Mode */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for work
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">John</span> 👋
          </h1>

          {/* Changed text-slate-600 to text-slate-400 for better dark mode visibility */}
          <p className="max-w-[540px] text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
            A passionate <span className="font-bold text-slate-900 dark:text-slate-100">Full Stack Developer</span> dedicated to building websites, web applications, and custom software that are not only highly functional but also visually captivating.
          </p>
        </div>

        {/* CTA Buttons - Rounded-full to match your "Message me" badge */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white hover:opacity-90 px-10 py-7 text-lg rounded-full transition-all">
              Free Consultation
            </Button>
          </Link>

          <Link href="/projects">
            <Button variant="outline" size="lg" className="border-slate-200 dark:border-slate-700 px-10 py-7 text-lg rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Explore Projects
            </Button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 pt-4 text-slate-400 dark:text-slate-500">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              className="hover:text-slate-900 dark:hover:text-teal-400 transition-all transform hover:-translate-y-1"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center items-center px-6">
        <div className="relative w-full max-w-[500px] aspect-square group">
          {/* Subtle glow effect behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <Image
            alt="John Rigel"
            fill
            src="/profile-pic.jpg"
            priority
            className="relative rounded-[2rem] object-cover shadow-2xl border border-slate-200/10"
          />
        </div>
      </div>
    </Section>
  );
}