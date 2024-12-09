const Footer = () => {
  return (
    <footer className="bg-primary/5 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Security</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; 2024 FinanceFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;