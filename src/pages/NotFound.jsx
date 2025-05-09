import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have vanished into another dimension.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
            
            <Link to="/games" className="btn btn-ghost">
              Browse Games
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound