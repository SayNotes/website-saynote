import Logo from '../atoms/Logo'
import Button from '../atoms/Button'
import NavMenu from '../molecules/NavMenu'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Menggunakan Atom Logo */}
          <Logo />

          {/* Menggunakan Molecule NavMenu untuk Desktop */}
          <NavMenu />

          {/* Menggunakan Atom Button untuk Desktop */}
          <div className="hidden md:flex items-center">
            <Button>New Note</Button>
          </div>

          {/* Tombol Hamburger Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Panel */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          {/* Menggunakan Molecule NavMenu versi Mobile */}
          <NavMenu mobile />
          <div className="pt-2 pb-4 border-t border-neutral-200 dark:border-neutral-800 px-5">
            {/* Menggunakan Atom Button versi lebar penuh */}
            <Button fullWidth>New Note</Button>
          </div>
        </div>
      )}
    </nav>
  )
}