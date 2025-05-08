
import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">ResilienceShield</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Comprehensive disaster recovery and backup solutions for containerized applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Container Backup</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Kubernetes Protection</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Disaster Recovery</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Cloud Migration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Disaster Recovery Guide</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Best Practices</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Security Framework</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ResilienceShield. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
