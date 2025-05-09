import { motion } from 'framer-motion'

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay in the Game</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest gaming news, exclusive offers, and early access to new releases.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection