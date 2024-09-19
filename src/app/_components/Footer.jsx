'use client'
import { Button } from "@/components/ui/button";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to providing the best healthcare services. Our team of doctors is here to ensure you receive top-quality care.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-400 hover:text-primary">Explore</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <FiFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <FiTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <FiLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <FiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
