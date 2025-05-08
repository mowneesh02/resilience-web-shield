
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Database, Cloud } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/95 sticky top-0 z-50 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">ResilienceShield</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Solutions
            </Link>
            <Link to="/strategies" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Strategies
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-brand-dark text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4 py-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className="text-gray-700 hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/strategies" 
              className="text-gray-700 hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Strategies
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Button className="bg-primary hover:bg-brand-dark text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
