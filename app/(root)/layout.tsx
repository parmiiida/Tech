import Navbar from "../../components/Navbar"
import Footer from "@/components/Footer"

export default function Layout({ children } : Readonly<{ children : React.ReactNode }>) {
    return(
        <main className="font-work-sans scroll-smooth scrollbar-hide bg-black">

            {children}

        </main>
    )
}