import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1E1E1E] text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Rating */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Pizza Galaxy Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Pizza Galaxy</span>
            </div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400 font-bold">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    fill={i < 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm">(2.145 Bewertungen)</span>
            </div>
            <p className="text-sm">
              €10–20 · Authentische italienische Pizza in Cuxhaven
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-gray-900 dark:text-white">Adresse</p>
                  <p>Poststraße 35<br />27474 Cuxhaven</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-gray-900 dark:text-white">Telefon</p>
                  <p>04721 690101</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-gray-900 dark:text-white">E-Mail</p>
                  <p>info@pizzagalaxy.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Montag - Donnerstag</span>
                <span>11:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Freitag - Samstag</span>
                <span>11:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag</span>
                <span>12:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <nav className="space-y-2">
              <Link to="/menu" className="block hover:text-white transition-colors">
                Speisekarte
              </Link>
              <Link to="/deals" className="block hover:text-white transition-colors">
                Angebote
              </Link>
              <Link to="/about" className="block hover:text-white transition-colors">
                Über uns
              </Link>
              <Link to="/contact" className="block hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Pizza Galaxy. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link to="/imprint" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 