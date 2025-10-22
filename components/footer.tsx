import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">KAZA</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Timeless silver jewellery crafted with passion and precision for the modern you.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-accent transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-accent transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-accent transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-accent transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@kaza.com" className="hover:text-accent transition-colors">
                  hello@kaza.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
            <p>&copy; {currentYear} KAZA. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
