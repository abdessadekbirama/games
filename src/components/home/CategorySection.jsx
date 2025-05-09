import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'action',
    name: 'Action',
    description: 'Fast-paced games focused on reflexes and coordination',
    image: 'https://images.pexels.com/photos/7915469/pexels-photo-7915469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-red-500 to-red-800'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Story-rich exploration and problem solving',
    image: 'https://images.pexels.com/photos/7915478/pexels-photo-7915478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-green-500 to-green-800'
  },
  {
    id: 'rpg',
    name: 'RPG',
    description: 'Deep character development and immersive worlds',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-purple-500 to-purple-800'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    description: 'Tactical thinking and resource management',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-blue-500 to-blue-800'
  },
]

const CategorySection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-3">Explore by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive into your favorite gaming genres and discover new titles to add to your collection.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/games?category=${category.id}`}
                className="group block relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300 hover:shadow-xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${category.image}')` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 group-hover:opacity-100 opacity-80 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection