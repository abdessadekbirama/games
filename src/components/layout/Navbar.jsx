import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi'

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Game<span className="text-accent-500">Verse</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            } end>
              Home
            </NavLink>
            <NavLink to="/games" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Games
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Contact
            </NavLink>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            
            <Link to="/login" className="hidden md:block btn btn-ghost">
              Sign in
            </Link>
            
            <Link to="/signup" className="hidden md:block btn btn-primary">
              Join Now
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="menu-button p-2 md:hidden text-gray-600 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 flex flex-col space-y-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/games" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Games
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              
              <div className="pt-4 flex flex-col space-y-2">
                <Link to="/login" className="btn btn-ghost" onClick={() => setIsMenuOpen(false)}>
                  Sign in
                </Link>
                <Link to="/signup" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full bg-white shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for games..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  autoFocus
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-600">
                  <FiSearch size={20} />
                </button>
              </div>
              <button 
                className="mt-2 text-sm text-gray-500 hover:text-primary-600"
                onClick={toggleSearch}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar