import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Best pizza delivery in town! The crust is always perfect and toppings are generous. It's our family's go-to for pizza night.",
    author: "Sarah M.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    content: "The vegan options are amazing! Finally a pizza place that takes plant-based seriously without compromising on taste.",
    author: "Michael K.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    content: "Lightning-fast delivery and the pizzas are always hot. Their student discount makes it even better!",
    author: "Emma R.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <div className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8"
            >
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                "{testimonial.content}"
              </p>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}