import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navLink = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-white/25 text-white shadow-sm'
        : 'text-white/70 hover:text-white hover:bg-white/15'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Linked<span className="text-blue-200">Posts</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-1">
          <NavLink to="/" end className={navLink}>Home</NavLink>
          <NavLink to="/login" className={navLink}>Sign In</NavLink>
          <NavLink
            to="/register"
            className="ml-2 px-5 py-2 bg-white text-blue-600 font-semibold text-sm rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-150 shadow"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white p-2 rounded-lg hover:bg-white/15 transition"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-5 pb-4 pt-2 flex flex-col gap-1 border-t border-white/15">
          <NavLink to="/" end className={navLink} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/login" className={navLink} onClick={() => setOpen(false)}>Sign In</NavLink>
          <NavLink
            to="/register"
            className="px-4 py-2 bg-white text-blue-600 font-semibold text-sm rounded-xl text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
