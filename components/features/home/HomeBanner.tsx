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
    <Section className="grid lg:grid-cols-2 gap-8 items-center py-20 bg-white  dark:bg-slate-950 dark:text-white transition-colors duration-300">
      
      {/* Left Content */}
      <div className="flex flex-col items-start space-y-6 px-10 md:px-20">

        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Message me
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hey, I'm John 👋
          </h1>

          <p className="max-w-[500px] text-slate-600  text-lg dark:text-white-800 leading-relaxed">
            A passionate <span className="font-semibold text-slate-900 dark:text-white">Full Stack Developer</span> dedicated to building websites, web applications, and custom software that are not only highly functional but also visually captivating.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-8 rounded-md">
              Free Consultation
            </Button>
          </Link>

          <Link href="/projects">
            <Button variant="outline" size="lg" className="border-slate-200 px-8 rounded-md">
              Explore Projects
            </Button>
          </Link>
        </div>

        {/* Social Icons - Grayscale style like the image */}
        <div className="flex items-center gap-5 pt-2 text-slate-400">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              className="hover:text-slate-900 transition-colors"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Content - Image with soft rounding */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[450px] aspect-square">
          <Image
            alt="John Rigel"
            fill
            src="/profile-pic.jpg" // Ensure this path is correct
            priority
            className="rounded-3xl object-cover shadow-sm"
          />
        </div>
      </div>
    </Section>
  );
}