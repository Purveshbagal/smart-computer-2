import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Computer
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              New & Refurbished Laptops, Desktops & Accessories
            </p>
            <div className="space-x-4">
              <Link to="/products" className="btn bg-accent hover:bg-blue-600 px-8 py-3 text-lg">
                View Products
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <img src="/images/hero-placeholder.jpg" alt="Smart Computer Products" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
