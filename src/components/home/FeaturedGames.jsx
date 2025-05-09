import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiClock, FiStar, FiUsers } from 'react-icons/fi'
import GameCard from '../games/GameCard'
import { featuredGames } from '../../data/gamesData'

const FeaturedGames = () => {
  const [activeTab, setActiveTab] = useState('newest')
  
  const filterGames = () => {
    switch (activeTab) {
      case 'popular':
        return [...featuredGames].sort((a, b) => b.rating - a.rating);
      case 'trending':
        return [...featuredGames].sort((a, b) => b.players - a.players);
      case 'newest':
      default:
        return [...featuredGames].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }
  }
  
  const filteredGames = filterGames().slice(0, 4)
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Featured Games</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover the most exciting titles that are making waves in the gaming community.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-2 p-1 bg-gray-100 rounded-lg">
            <button
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'newest' ? 'bg-white shadow text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveTab('newest')}
            >
              <FiClock className="mr-1.5" />
              Newest
            </button>
            <button
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'popular' ? 'bg-white shadow text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveTab('popular')}
            >
              <FiStar className="mr-1.5" />
              Popular
            </button>
            <button
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'trending' ? 'bg-white shadow text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setActiveTab('trending')}
            >
              <FiUsers className="mr-1.5" />
              Trending
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/games" className="btn btn-secondary">
            View All Games
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames