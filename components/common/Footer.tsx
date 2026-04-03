import Link from "next/link";
import { Mail, MapPin } from "lucide-react"; // I recommend adding these icons

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-20">
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand/Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl tracking-tight dark:text-white">John Rigel Recuerdo</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Software Developer</p>
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-emerald-500" /> Cebu, Philippines
              </p>
              <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-emerald-500" /> recuerdojohnrigel@gmail.com
              </p>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Pages</h3>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-emerald-500 dark:hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Resources</h3>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
              <li><Link href="https://github.com/..." target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">GitHub Boilerplates</Link></li>
              <li><Link href="https://codepen.io" target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">CodePen Examples</Link></li>
              <li><Link href="https://developer.mozilla.org" target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">MDN Web Docs</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Connect</h3>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
              <li><Link href="https://linkedin.com/..." target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="https://github.com/..." target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">GitHub</Link></li>
              <li><Link href="https://instagram.com/..." target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="https://facebook.com/..." target="_blank" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} John Rigel Recuerdo. All rights reserved.</p>
          <p className="italic">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
