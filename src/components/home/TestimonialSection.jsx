import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Casual Gamer",
    quote: "GameVerse completely transformed how I discover new games. The recommendations are spot-on and I've found so many hidden gems I would have otherwise missed.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Pro Gamer",
    quote: "As a professional gamer, I need to stay on top of the latest releases and trends. GameVerse has become my go-to platform for comprehensive reviews and community insights.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Game Developer",
    quote: "The level of detail in GameVerse's game analysis is impressive. As a developer, I appreciate how they highlight both technical achievements and player experience.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  const goToNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What Gamers Say</h2>
              <p className="text-gray-600 mb-8">
                Hear from our community of passionate gamers who've found their perfect gaming experience through GameVerse.
              </p>
              
              <div className="flex space-x-2">
                <button 
                  onClick={goToPrevious} 
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button 
                  onClick={goToNext} 
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <blockquote>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
              </blockquote>
              
              <div className="mt-6 flex">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full mx-1 ${
                      currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection