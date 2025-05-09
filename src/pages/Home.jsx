import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import FeaturedGames from '../components/home/FeaturedGames'
import CategorySection from '../components/home/CategorySection'
import TestimonialSection from '../components/home/TestimonialSection'
import CtaSection from '../components/home/CtaSection'
import NewsletterSection from '../components/home/NewsletterSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedGames />
      <CategorySection />
      <TestimonialSection />
      <CtaSection />
      <NewsletterSection />
    </motion.div>
  )
}

export default Home