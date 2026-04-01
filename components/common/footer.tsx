import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        

      
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm mb-12">
          
          {/* Column 1: Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">John Rigel Recuerdo</h3>
            <p className="text-gray-600 mb-2">Software Developer</p>
            <p className="text-gray-500 flex items-center gap-1">
              📍 Cebu, Philippines
            </p>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider">Pages</h3>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li><Link href="/" className="hover:text-black transition">Home</Link></li>
              <li><Link href="/projects" className="hover:text-black transition">Projects</Link></li>
              <li><Link href="/about" className="hover:text-black transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li><Link href="https://github.com/Rglhnoj?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">GitHub Boilerplates</Link></li>
              <li><Link href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">CodePen Examples</Link></li>
              <li><Link href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">MDN Web Docs</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li><Link href="https://www.linkedin.com/in/recuerdo-john-rigel-82155037b/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">LinkedIn</Link></li>
              <li><Link href="https://github.com/Rglhnoj" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">GitHub</Link></li>
              <li><Link href="https://instagram.com/rgljohnny.25" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Instagram</Link></li>
              <li><Link href="https://facebook.com/johnrigelrecuerdo" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-gray-500 text-xs border-t border-gray-100 pt-8">
          © {new Date().getFullYear()} John Rigel Recuerdo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}