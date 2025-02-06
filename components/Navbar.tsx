import Link from "next/link";
import { Button } from "@/components/ui/button"



export default function Navbar() {
    return (
        <div className="fixed inset-x-0  backdrop-blur-lg top-0 z-50">
          <nav className="flex justify-center relative">
            <div className="flex items-center justify-between w-[100%] h-[7vh] max-w-6xl px-6 py-4 space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16">
              {/* Logo */}
              <Link href="/" className="text-xl font-bold text-white ">
                Tech
              </Link>
              {/* Links */}
              <div className="flex text-[13px] space-x-2 sm:space-x-6 md:space-x-8 lg:space-x-10">
                <a href="/features" className="text-gray-300 nav-hover-btn hover:text-white">
                  Services
                </a>
                <a href="/Contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
                <a href="/blog" className="text-gray-300 hover:text-white">
                  Company
                </a>
                <a href="/sign-in" className="text-gray-300 hover:text-white">
                 Customers
                </a>
                <Link href="/Blog" className="text-gray-300 hover:text-white">
                 Blog
                </Link>
              </div>
              {/* Call-to-Action Button */}
              <div className="flex gap-1 text-[11px] shrink-0">
                <Button variant="outline" className="h-[30px] w-[65px] justify-center text-[11px]">
                  <Link href="/signup">Sign Up</Link>
                </Button>
                <Button variant="secondary" className=" h-[30px] w-[65px] border-[#5f5f5f] border-[2px] bg-[#494949] text-white text-[11px]">
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
    );
}
