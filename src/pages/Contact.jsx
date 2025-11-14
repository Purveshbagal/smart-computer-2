import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for all your computer needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-6">Owner Information</h2>
              <p className="text-lg font-medium mb-2">Javed Bagwan</p>
              <p className="text-gray-600">Owner, Smart Computer</p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-6">Shop Address</h2>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p>Miri Road, near Mansi Hospital</p>
                  <p>Shevgaon, Ahilyanagar</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-accent" />
                  <a href="tel:9922340054" className="text-accent hover:underline">
                    9922340054
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-accent" />
                  <a href="mailto:smartcomputershevgaon@gmail.com" className="text-accent hover:underline">
                    smartcomputershevgaon@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card mt-8">
              <h2 className="text-2xl font-semibold mb-6">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">
                  {/* Replace with actual Google Maps embed */}
                  Map will be embedded here. Add Google Maps iframe with the shop location.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
