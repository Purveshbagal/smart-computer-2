import { Link } from 'react-router-dom'
import { PhoneIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Smart Computer
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:9922340054" className="flex items-center space-x-2 hover:text-accent transition-colors">
            <PhoneIcon className="h-5 w-5" />
            <span className="phone-hidden">9922340054</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
