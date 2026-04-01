import Image from "next/image";
import { 
  FaLinkedin, FaGithub, FaTwitter, FaFacebook, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload 
} from "react-icons/fa";

export default function AboutPage() {
  return ( 
    <div className="w-full p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* 1. HEADER / COVER SECTION */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
          {/* Cover Image Container */}
          <div className="relative w-full h-48 md:h-64">
            <Image 
              src="/background.jpg" 
              alt="cover" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>

          {/* Profile Info Row */}
          <div className="p-6 flex flex-col md:flex-row items-center md:items-end gap-5 -mt-16 md:-mt-20">
            <div className="relative z-10">
              {/* Profile Image Container - added 'relative' so 'fill' works */}
              <div className="relative rounded-full border-4 border-white overflow-hidden bg-gray-100 w-32 h-32 md:w-44 md:h-44 shadow-lg">
                <Image 
                  src="/profile-pic.jpg" 
                  alt="profile" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="text-center md:text-left pb-4">
              <h1 className="text-3xl font-bold text-gray-900">John Rigel V. Recuerdo</h1>
              <p className="text-gray-500 font-medium text-lg">Software Developer</p>
            </div>
          </div>
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          
          {/* LEFT COLUMN: ABOUT, SOCIALS, CONTACT */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-gray-400 text-lg">👤</span> About
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Hi there, I'm <span className="font-bold text-gray-900">Rigel</span>. I'm a BSIT student majoring in Software Development. 
                I'm passionate about building high-performance applications that seamlessly bridge web and mobile experiences.
              </p>
              <p>
                I specialize in designing and building scalable, user-centric solutions, from dynamic websites to complex custom applications. 
                My focus is on performance, accessibility, and delivering exceptional user experiences through modern technologies.
              </p>
              <p>
                I'm currently focused on integrating AI into applications to enhance automation, efficiency, and user engagement.
              </p>
            </div>

            {/* SOCIALS & CONTACT SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t border-gray-50">
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Socials</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer transition-colors">
                    <FaLinkedin className="text-lg" /> LinkedIn
                  </li>
                  <li className="flex items-center gap-3 hover:text-black cursor-pointer transition-colors">
                    <FaGithub className="text-lg" /> GitHub
                  </li>
                  <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer transition-colors">
                    <FaTwitter className="text-lg" /> Twitter
                  </li>
                  <li className="flex items-center gap-3 hover:text-blue-700 cursor-pointer transition-colors">
                    <FaFacebook className="text-lg" /> Facebook
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Contact</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-400 text-lg" /> recuerdojohnrigel@gmail.com
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-gray-400 text-lg" /> +63 993 412 7869
                  </li>
                  <li className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-gray-400 text-lg" /> Cebu, Philippines
                  </li>
                </ul>
              </div>
            </div>

            {/* RESUME BUTTON */}
            <div className="mt-10">
              <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-md flex items-center gap-3 group">
                <FaDownload className="text-sm group-hover:translate-y-0.5 transition-transform" /> 
                Download Resume
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: EXPERIENCE TIMELINE */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <span className="text-gray-400 text-lg">📋</span> Experience
            </h2>
            
            <div className="relative border-l border-gray-100 ml-3 space-y-10">
              {/* Exp Item 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border-2 border-gray-300"></div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-gray-900 text-sm">Web Developer</h4>
                  <span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">(Remote)</span>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-1">GrowthOps Asia</p>
                <p className="text-[10px] text-gray-400 mt-1 font-mono">Oct 2024 — Present</p>
              </div>

              {/* Exp Item 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border-2 border-gray-300"></div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-gray-900 text-sm">Jr. Web Developer</h4>
                  <span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">(Remote)</span>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-1">GrowthOps Asia</p>
                <p className="text-[10px] text-gray-400 mt-1 font-mono">2023 — 2024</p>
              </div>

              {/* Exp Item 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border-2 border-gray-300"></div>
                <h4 className="font-bold text-gray-900 text-sm">Software Developer</h4>
                <p className="text-xs text-gray-500 font-medium mt-1 italic">Freelancer</p>
                <p className="text-[10px] text-gray-400 mt-1 font-mono">2022 — Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TECH STACKS SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <span className="text-gray-400 text-lg">{"<>"}</span> Tech Stacks
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Vite"].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Backend</p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "PHP", "Laravel", "DrizzleORM", "REST API", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}