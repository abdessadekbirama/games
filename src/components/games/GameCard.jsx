import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const GameCard = ({ game }) => {
  const { id, title, thumbnail, price, rating, platforms, releaseDate, genre } = game
  
  // Format date to "Month Year"
  const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })
  
  return (
    <Link to={`/games/${id}`}>
      <motion.article 
        className="card h-full group cursor-pointer"
        whileHover={{ y: -5 }}
      >
        {/* Game Image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Price Tag */}
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {price === 0 ? 'Free' : `$${price.toFixed(2)}`}
          </div>
          
          {/* Platforms */}
          <div className="absolute bottom-4 left-4 flex space-x-1.5">
            {platforms.map((platform, index) => (
              <span 
                key={index}
                className="bg-black/70 text-white px-2 py-1 rounded text-xs"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        
        {/* Game Info */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
            
            <div className="flex items-center">
              <FiStar className="text-yellow-500 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{genre}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

export default GameCard