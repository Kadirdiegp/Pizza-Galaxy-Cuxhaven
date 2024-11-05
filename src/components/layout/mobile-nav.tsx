import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Sun, Moon, Menu as MenuIcon, X } from 'lucide-react';
import { useCartStore } from '../../stores/cart';
import { useStoreHours } from '../../hooks/useStoreHours';
import { useThemeStore } from '../../stores/theme';

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { items } = useCartStore();
  const { isOpen: isStoreOpen, closingTime } = useStoreHours();
  const { isDark, toggleTheme } = useThemeStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-full bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Pizza Galaxy Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/menu"
              className={`text-base transition-colors ${
                location.pathname === '/menu' 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Speisekarte
            </Link>
            <Link
              to="/deals"
              className={`text-base transition-colors ${
                location.pathname === '/deals' 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Angebote
            </Link>
            <Link
              to="/about"
              className={`text-base transition-colors ${
                location.pathname === '/about' 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Über uns
            </Link>
            <Link
              to="/contact"
              className={`text-base transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="hidden lg:block p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isDark ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#121212] lg:hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Pizza Galaxy Logo" 
                className="h-8 w-auto"
              />
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Store Status */}
          <div className="px-4 py-2 flex items-center gap-2 text-sm text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isStoreOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span>Geöffnet bis {closingTime}</span>
          </div>

          {/* Menu Items */}
          <nav className="mt-6 px-4">
            <Link
              to="/menu"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-lg text-white"
            >
              Speisekarte
            </Link>
            <Link
              to="/deals"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-lg text-white"
            >
              Angebote
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-lg text-white"
            >
              Über uns
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-lg text-white"
            >
              Kontakt
            </Link>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-gray-400">
            <span className="text-sm">Version 1.0.0</span>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:text-white transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 