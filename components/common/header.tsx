import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ThemeToggle} from "@/components/common/Themetoggle";


export function Header() {
    return (
        <header className="border-b border-gray-800 py-5">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo / Brand Name */}
                <div>
                <h1 className="font-bold">Portfolio</h1>
                </div>
                {/* Navigation Links */}
                <nav>
                    <ul className="flex items-center gap-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button>Contacts</Button>
            </div>
            </div>
            </div>
        </header>
    )
}