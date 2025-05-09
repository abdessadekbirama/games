import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiFilter, FiSearch, FiX } from 'react-icons/fi'
import GameCard from '../components/games/GameCard'
import { allGames } from '../data/gamesData'

const Games = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  // Get the category from the URL query parameter
  const categoryParam = searchParams.get('category')
  
  const [filters, setFilters] = useState({
    category: categoryParam || 'all',
    platform: 'all',
    price: 'all',
    sort: 'newest'
  })
  
  // Initialize games data
  useEffect(() => {
    setGames(allGames)
    setFilteredGames(allGames)
  }, [])
  
  // Apply filters when filters change
  useEffect(() => {
    let result = [...games]
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.genre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(game => 
        game.genre.toLowerCase().includes(filters.category.toLowerCase())
      )
    }
    
    // Filter by platform
    if (filters.platform !== 'all') {
      result = result.filter(game => 
        game.platforms.includes(filters.platform)
      )
    }
    
    // Filter by price
    if (filters.price !== 'all') {
      switch (filters.price) {
        case 'free':
          result = result.filter(game => game.price === 0)
          break
        case 'under20':
          result = result.filter(game => game.price > 0 && game.price < 20)
          break
        case 'under40':
          result = result.filter(game => game.price >= 20 && game.price < 40)
          break
        case 'premium':
          result = result.filter(game => game.price >= 40)
          break
        default:
          break
      }
    }
    
    // Sort games
    switch (filters.sort) {
      case 'newest':
        result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
        break
      case 'oldest':
        result.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
        break
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    
    setFilteredGames(result)
    
    // Update URL params for category
    if (filters.category !== 'all') {
      setSearchParams({ category: filters.category })
    } else {
      setSearchParams({})
    }
  }, [games, filters, searchTerm, setSearchParams])
  
  // Update category filter when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }))
    }
  }, [categoryParam])
  
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
  }
  
  const resetFilters = () => {
    setFilters({
      category: 'all',
      platform: 'all',
      price: 'all',
      sort: 'newest'
    })
    setSearchTerm('')
    setSearchParams({})
  }
  
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold mb-4">Discover Games</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our collection of top-rated games across all platforms and genres. 
            Use the filters to find your next gaming adventure.
          </p>
        </motion.div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search games..."
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <button
            onClick={toggleFilters}
            className="md:w-auto w-full btn btn-secondary flex items-center justify-center"
          >
            <FiFilter className="mr-2" />
            Filters
          </button>
          
          {Object.values(filters).some(value => value !== 'all' && value !== 'newest') && (
            <button
              onClick={resetFilters}
              className="md:w-auto w-full btn btn-ghost flex items-center justify-center"
            >
              <FiX className="mr-2" />
              Reset
            </button>
          )}
        </div>
        
        {/* Filter Panel */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 p-6 rounded-lg mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Categories</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="rpg">RPG</option>
                  <option value="strategy">Strategy</option>
                  <option value="sports">Sports</option>
                  <option value="racing">Racing</option>
                  <option value="sandbox">Sandbox</option>
                </select>
              </div>
              
              {/* Platform Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <select
                  value={filters.platform}
                  onChange={(e) => handleFilterChange('platform', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Platforms</option>
                  <option value="PC">PC</option>
                  <option value="PS5">PlayStation 5</option>
                  <option value="XSX">Xbox Series X</option>
                  <option value="Switch">Nintendo Switch</option>
                  <option value="Mobile">Mobile</option>
                </select>
              </div>
              
              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <select
                  value={filters.price}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="under20">Under $20</option>
                  <option value="under40">$20 - $40</option>
                  <option value="premium">$40+</option>
                </select>
              </div>
              
              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-xl font-bold mb-2">No games found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={resetFilters}
                className="mt-6 btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Games