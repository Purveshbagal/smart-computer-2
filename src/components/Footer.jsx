import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Smart Computer</h3>
            <p className="text-sm">Your trusted source for new and refurbished computers in Shevgaon.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <a href="tel:9922340054" className="hover:text-accent">9922340054</a>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4" />
                <a href="mailto:smartcomputershevgaon@gmail.com" className="hover:text-accent">smartcomputershevgaon@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4" />
                <span>Miri Road, near Mansi Hospital, Shevgaon, Ahilyanagar</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <p className="text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className="text-sm">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Smart Computer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
