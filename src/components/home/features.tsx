import React from 'react';
import { Truck, Clock, Leaf, Shield, Pizza, Star } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Express Delivery',
    description: 'Hot and fresh, delivered in 30 minutes or less to your doorstep.',
    color: 'text-blue-500',
    gradient: 'from-blue-500/10 to-transparent'
  },
  {
    icon: Pizza,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest ingredients, sourced daily from local suppliers.',
    color: 'text-green-500',
    gradient: 'from-green-500/10 to-transparent'
  },
  {
    icon: Star,
    title: 'Best Deals',
    description: 'Regular promotions and combo offers to give you the best value.',
    color: 'text-yellow-500',
    gradient: 'from-yellow-500/10 to-transparent'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: "Not satisfied? We will make it right or your money back.",
    color: 'text-purple-500',
    gradient: 'from-purple-500/10 to-transparent'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white dark:bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Pizza Galaxy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Experience pizza delivery that's out of this world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white dark:bg-[#252525] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* Decorative dots */}
                <div className="absolute -bottom-1 -right-1 w-20 h-20 opacity-10">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${feature.color.replace('text', 'bg')}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}