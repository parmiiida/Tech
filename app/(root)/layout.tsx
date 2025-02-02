import Navbar from "../../components/Navbar"

export default function Layout({ children } : Readonly<{ children : React.ReactNode }>) {
    return(
        <main className="font-work-sans scroll-smooth overflow-y-auto scrollbar-hide bg-black">
            <Navbar/>
            {children}
        </main>
    )
}