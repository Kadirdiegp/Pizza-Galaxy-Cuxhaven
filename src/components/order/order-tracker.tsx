import React from 'react';
import { Clock, ChefHat, Bike, CheckCircle } from 'lucide-react';

interface OrderTrackerProps {
  status: 'preparing' | 'cooking' | 'delivering' | 'delivered';
  estimatedDelivery: string;
  orderNumber: string;
}

const steps = [
  {
    id: 'preparing',
    title: 'Order Confirmed',
    icon: Clock,
    description: 'Your order has been received',
  },
  {
    id: 'cooking',
    title: 'Preparing',
    icon: ChefHat,
    description: 'Your pizza is being prepared',
  },
  {
    id: 'delivering',
    title: 'On the Way',
    icon: Bike,
    description: 'Your order is on its way',
  },
  {
    id: 'delivered',
    title: 'Delivered',
    icon: CheckCircle,
    description: 'Enjoy your meal!',
  },
];

export function OrderTracker({ status, estimatedDelivery, orderNumber }: OrderTrackerProps) {
  const currentStepIndex = steps.findIndex(step => step.id === status);

  return (
    <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Order #{orderNumber}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Estimated delivery: {estimatedDelivery}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200 dark:bg-gray-700">
          <div
            className="absolute h-full bg-red-500 transition-all duration-500"
            style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors ${
                    isCompleted
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                  } ${isCurrent ? 'ring-4 ring-red-500/20' : ''}`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="mt-4 text-center">
                  <p
                    className={`font-medium ${
                      isCompleted ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 