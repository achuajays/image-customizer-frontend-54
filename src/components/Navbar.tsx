import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">FinanceFlow</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/products" className="text-white hover:text-gray-300 px-3 py-2">Products</Link>
              <Link to="/developers" className="text-white hover:text-gray-300 px-3 py-2">Developers</Link>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2">Solutions</a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2">Resources</a>
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2">Pricing</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              Sign in
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;