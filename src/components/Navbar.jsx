import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b z-50" style={{ backgroundColor: '#b7dad7' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="text-2xl font-bold" style={{ color: '#314b6e' }}>
          Ventio Production
        </div>

        <div className="hidden md:flex gap-8 font-medium" style={{ color: '#000000', fontFamily: 'Poppins' }}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:opacity-70">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:opacity-70">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:opacity-70">Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:opacity-70">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" style={{ color: '#314b6e' }}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block">Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block">Contact</a>
        </div>
      )}
    </nav>
  )
}
