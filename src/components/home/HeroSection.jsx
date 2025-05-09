import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-transparent z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-accent-500 text-white font-semibold rounded-full mb-6">
              Discover New Worlds
            </span>
            
            <h1 className="text-white mb-6 leading-tight">
              Unleash Your Gaming Potential with GameVerse
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl">
              Explore an endless universe of games across all platforms. From action-packed adventures to strategic masterpieces, find your next gaming obsession.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/games" className="btn btn-primary">
                Explore Games
              </Link>
              <Link to="/signup" className="btn btn-ghost bg-white/10 text-white hover:bg-white/20">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 right-0 w-full h-24 md:h-40 lg:h-56 bg-gradient-to-t from-gray-900 to-transparent z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
    </section>
  )
}

export default HeroSection