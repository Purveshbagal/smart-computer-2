import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const featuredProducts = products.slice(0, 3)

  return (
    <div>
      <Hero />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our selection of new and refurbished computers and accessories.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn px-8 py-3 text-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
