import { motion } from 'framer-motion'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

const ProductCard = ({ product }) => {
  const handleEnquire = () => {
    const subject = `Product Enquiry: ${product.name}`
    const body = `Hi, I'm interested in the ${product.name}. Please provide more details.`
    window.location.href = `mailto:smartcomputershevgaon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card hover:shadow-lg transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.specs}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-accent">₹{product.price.toLocaleString()}</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          product.condition === 'New' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {product.condition}
        </span>
      </div>
      <button
        onClick={handleEnquire}
        className="btn w-full flex items-center justify-center space-x-2"
        aria-label={`Enquire about ${product.name}`}
      >
        <EnvelopeIcon className="h-4 w-4" />
        <span>Enquire</span>
      </button>
    </motion.div>
  )
}

export default ProductCard
