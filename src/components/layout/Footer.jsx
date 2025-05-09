import { Link } from 'react-router-dom'
import { FiTwitter, FiInstagram, FiYoutube, FiFacebook, FiTwitch } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Game<span className="text-accent-500">Verse</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for gaming news, reviews, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener">
                <FiInstagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener">
                <FiYoutube size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitch.tv" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener">
                <FiTwitch size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/games" className="text-gray-400 hover:text-white transition-colors">Games</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/games?category=action" className="text-gray-400 hover:text-white transition-colors">Action</Link></li>
              <li><Link to="/games?category=adventure" className="text-gray-400 hover:text-white transition-colors">Adventure</Link></li>
              <li><Link to="/games?category=rpg" className="text-gray-400 hover:text-white transition-colors">RPG</Link></li>
              <li><Link to="/games?category=strategy" className="text-gray-400 hover:text-white transition-colors">Strategy</Link></li>
              <li><Link to="/games?category=sports" className="text-gray-400 hover:text-white transition-colors">Sports</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest gaming news and releases.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                required
              />
              <button 
                type="submit" 
                className="w-full btn btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} GameVerse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer