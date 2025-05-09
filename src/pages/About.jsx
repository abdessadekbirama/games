import { motion } from 'framer-motion'
import { FiUsers, FiAward, FiMonitor, FiGlobe } from 'react-icons/fi'

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About GameVerse</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're on a mission to create the ultimate gaming destination, connecting players with their perfect games and a vibrant community of fellow enthusiasts.
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
              <FiUsers size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">2M+</h3>
            <p className="text-gray-500">Active Gamers</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-3 bg-secondary-100 text-secondary-600 rounded-full mb-4">
              <FiMonitor size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">5K+</h3>
            <p className="text-gray-500">Games Featured</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-3 bg-accent-100 text-accent-600 rounded-full mb-4">
              <FiAward size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-gray-500">Top Developers</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-3 bg-success-100 text-success-600 rounded-full mb-4">
              <FiGlobe size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">190+</h3>
            <p className="text-gray-500">Countries Reached</p>
          </div>
        </motion.div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                GameVerse was founded in 2023 by a group of passionate gamers who were frustrated with the fragmented gaming landscape. We wanted to create a single destination where players could discover, discuss, and dive into games across all platforms.
              </p>
              <p>
                What started as a small community project has grown into a global platform connecting millions of players, developers, and creators united by their love of gaming.
              </p>
              <p>
                Our team now spans multiple countries, but we share the same core mission: to make gaming more accessible, inclusive, and enjoyable for everyone.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="GameVerse Team" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-600">
                We believe that gaming is better together. Our platform is designed to foster connections, conversations, and collaborations among players.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                Games are for everyone. We strive to create a platform where all players feel welcome, represented, and respected, regardless of background or experience level.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We celebrate creativity and innovation in gaming. Our platform spotlights groundbreaking titles and the developers pushing the boundaries of interactive entertainment.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jason Chen" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Jason Chen</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Sarah Johnson</h3>
              <p className="text-gray-600">Chief Product Officer</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Michael Rodriguez" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Michael Rodriguez</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lisa Wong" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Lisa Wong</h3>
              <p className="text-gray-600">Community Director</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About