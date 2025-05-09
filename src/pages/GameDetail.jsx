import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiStar, FiCalendar, FiTag, FiMonitor, FiUsers, FiShoppingCart } from 'react-icons/fi'
import { allGames } from '../data/gamesData'

const GameDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  
  useEffect(() => {
    // Simulate loading delay for realism
    const timer = setTimeout(() => {
      const foundGame = allGames.find(g => g.id === parseInt(id))
      setGame(foundGame || null)
      setLoading(false)
      
      if (foundGame) {
        setActiveImage(0)
      }
    }, 500)
    
    return () => clearTimeout(timer)
  }, [id])
  
  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading game details...</p>
        </div>
      </div>
    )
  }
  
  if (!game) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container-custom text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
          <p className="text-gray-600 mb-8">
            The game you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/games" className="btn btn-primary">
            Browse Games
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Games
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Images */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl bg-gray-100 mb-4"
            >
              <img 
                src={game.screenshots[activeImage]} 
                alt={game.title}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {game.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-lg ${
                    activeImage === index ? 'ring-4 ring-primary-500' : 'opacity-70 hover:opacity-100'
                  } transition-all`}
                >
                  <img 
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Game Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-500 mr-4">
                <FiStar className="mr-1" />
                <span className="font-medium">{game.rating.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FiUsers className="mr-1" />
                <span>{(game.players / 1000).toFixed(0)}k players</span>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {game.description}
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <FiTag className="w-5 h-5 mr-3 text-gray-500" />
                <span className="font-medium mr-2">Genre:</span>
                <span>{game.genre}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <FiMonitor className="w-5 h-5 mr-3 text-gray-500" />
                <span className="font-medium mr-2">Platforms:</span>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-md text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-gray-700">
                <FiCalendar className="w-5 h-5 mr-3 text-gray-500" />
                <span className="font-medium mr-2">Release Date:</span>
                <span>
                  {new Date(game.releaseDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="text-gray-700">
                <span className="font-medium">Developer:</span> {game.developer}
              </div>
              
              <div className="text-gray-700">
                <span className="font-medium">Publisher:</span> {game.publisher}
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">
                  {game.price === 0 ? 'Free' : `$${game.price.toFixed(2)}`}
                </span>
                
                {game.price > 0 && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    20% off
                  </span>
                )}
              </div>
              
              <button className="btn btn-primary w-full flex items-center justify-center">
                <FiShoppingCart className="mr-2" />
                {game.price === 0 ? 'Download Now' : 'Add to Cart'}
              </button>
              
              <button className="btn btn-ghost w-full">
                Add to Wishlist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default GameDetail