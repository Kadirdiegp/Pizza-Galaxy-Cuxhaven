import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { useDeliveryStore } from '../stores/delivery';
import { formatPrice } from '../lib/utils';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  deliveryNotes: string;
}

const initialForm: CheckoutForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: 'Cuxhaven',
  postalCode: '',
  deliveryNotes: '',
};

export function CheckoutPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const { items, clearCart } = useCartStore();
  const { address: savedAddress } = useDeliveryStore();

  useEffect(() => {
    if (savedAddress) {
      const addressParts = savedAddress.split(',');
      const postalCodeMatch = savedAddress.match(/\b\d{5}\b/);
      
      setForm(prev => ({
        ...prev,
        address: addressParts[0].trim(),
        city: 'Cuxhaven',
        postalCode: postalCodeMatch ? postalCodeMatch[0] : ''
      }));
    }
  }, [savedAddress]);

  const cartItems = items.map((item) => ({
    ...item,
    total: item.price * item.quantity,
  }));

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!savedAddress) {
      alert('Bitte wählen Sie eine Lieferadresse aus');
      return;
    }

    clearCart();
    navigate('/order-confirmation');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  if (cartItems.length === 0) {
    navigate('/menu');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Delivery Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Lieferadresse
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  readOnly={!!savedAddress}
                  className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                    ${savedAddress ? 'bg-gray-100 dark:bg-gray-800' : 'focus:ring-2 focus:ring-red-500'} 
                    focus:border-transparent dark:bg-[#121212] dark:text-white`}
                />
                {!savedAddress && (
                  <p className="mt-1 text-sm text-red-500">
                    Bitte wählen Sie zuerst eine Lieferadresse aus
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Delivery Notes (Optional)
                </label>
                <textarea
                  name="deliveryNotes"
                  value={form.deliveryNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-[#121212] dark:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-red-600 transition-colors"
            >
              Place Order ({formatPrice(total)})
            </button>
          </form>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center gap-4 bg-gray-50 dark:bg-[#121212] p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.size} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {formatPrice(item.total)}
                  </p>
                </div>
              ))}

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-gray-900 dark:text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                  <span className="text-gray-900 dark:text-white">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-gray-900 dark:text-white">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}