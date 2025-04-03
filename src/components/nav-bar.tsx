import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"

const NavBar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            KODEST<span className="text-xs align-top ml-1">STUDIO</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#collections" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
              Collections
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
              Contact
            </Link>
            <Link
              href="#contact"
              className="border border-white px-4 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Book Now
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>
	)
}

export default NavBar
