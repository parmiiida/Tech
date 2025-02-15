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
    <div className="fixed inset-x-0 backdrop-blur-lg bg-black/70 top-0 z-50 ">
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
                <NavigationMenuTrigger className="text-gray-300 hover:text-white">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-zinc-900 h-auto">

                  <NavigationMenuLink asChild>
                    <Link href="/Company" className="text-white/60 hover:text-white">
                    <div className="w-108 border-white/10 p-1">
                      <div className="grid grid-cols-2 w-96 border border-white/10">
                        <div className="border  border-white/10 p-3 w-full h-full">
                          <p>Lorem ipsum...</p>
                        </div>
                        <div className="border  border-white/10 p-3 w-full">bye</div>
                      </div>
                    </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
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
