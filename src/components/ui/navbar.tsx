import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pizza, ShoppingCart, Moon, Sun, Menu, X } from 'lucide-react';
import { useThemeStore } from '../../store/theme';
import { useCartStore } from '../../store/cart';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const { items } = useCartStore();
  const location = useLocation();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navigation = [
    { name: 'Menu', href: '/menu' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-[#121212] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center gap-2">
              <Pizza className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Pizza Galaxy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors',
                  location.pathname === item.href && 'text-red-500'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              className="relative text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 p-2"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/cart"
              className="relative text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 p-2"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-[#121212] shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500',
                location.pathname === item.href && 'text-red-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}