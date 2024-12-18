import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import logo from "../../assets/logos/logo3.png"

export default function Footer() {
  const navItems = [
    { id: 1, title: "IFCE 2025", route: "/" },
    { id: 2, title: "Contact", route: "/contact" },
  ]

  return (
    <footer className="bg-darkGray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <NavLink to="/" className="inline-block">
              <img src={logo} alt="IFCE Logo" className="w-36" />
            </NavLink>
            <p className="text-sm text-lightGray">
              9th International Foundry Congress & Exhibition, PC Hotel, Lahore, Pakistan
              <br />
              January 29-30, 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.route}
                    className="text-lightGray hover:text-orange transition-colors duration-300"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-orange mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="text-orange mr-2" size={18} />
                <span>+92-322-8487873</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-orange mr-2" size={18} />
                <span>+92-303-7848558</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-orange mr-2" size={18} />
                <span>pakistanfoundryassociation <br /> @gmail.com</span>
              </li>
              <li className="flex items-center">
                <Globe className="text-orange mr-2" size={18} />
                <span>www.pfa.org.pk</span>
              </li>
            </ul>
          </div>

          {/* Secretariat */}
          <div>
            <h3 className="text-lg font-semibold text-orange mb-4">Secretariat</h3>
            <p className="text-sm text-lightGray">Pakistan Foundry Association</p>
            <div className="flex items-start mt-2">
              <MapPin className="text-orange mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-sm text-lightGray">
                14 KM G.T, near Orange Line Station Dera Gujran, Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-8 pt-8 flex-col md:flex-row  flex md:justify-between items-center">
          <a
            href="https://chapter-001.com"
            className="text-base font-bold text-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with <span className='text-red-300 text-lg'>❤</span> by Chapter001 Pakistan
          </a>
          <p className="text-sm text-lightGray mt-4 md:mt-0">
            © {new Date().getFullYear()} PFA. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}