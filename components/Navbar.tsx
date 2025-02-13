"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 backdrop-blur-lg top-0 z-50 ">
      <nav className="flex justify-center relative">
        <div className="flex items-center justify-between w-[100%] h-[7vh] max-w-6xl px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            Tech
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex text-[13px] space-x-6">
            <Link href="/features" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/Contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
              <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/Company" className="text-gray-300 hover:text-white">
                    <NavigationMenuTrigger>Comapny</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-black">
                      <NavigationMenuLink className="text-white">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/customers" className="text-gray-300 hover:text-white">
              Customers
            </Link>
            <Link href="/Blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-2 text-[11px]">
            <Button variant="outline" className="h-[30px] w-[65px] justify-center text-[11px]">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button variant="secondary" className="h-[30px] w-[65px] border-[#5f5f5f] border-[2px] bg-[#494949] text-white text-[11px]">
              <Link href="/login">Login</Link>
            </Button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className="sm:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[7vh] left-0 w-full bg-black/90  backdrop-blur-md md:hidden flex flex-col items-center py-4 space-y-4">
          <Link href="/features" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/Contact" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/Company" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Company
          </Link>
          <Link href="/customers" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Customers
          </Link>
          <Link href="/Blog" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </div>
  )
}
