import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

export function OrderConfirmationPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const estimatedDelivery = new Date(Date.now() + 45 * 60000).toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Order Confirmed!
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Thank you for ordering from Pizza Galaxy
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg px-6 py-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Order Number
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                #{orderNumber}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Estimated Delivery Time
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {estimatedDelivery}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We'll send you an email confirmation with order details and tracking information.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
          >
            Order More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Back Home
            <Home className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}