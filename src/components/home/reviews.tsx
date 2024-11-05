import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Jörg Schröder",
    rating: 5,
    date: "vor 2 Jahren",
    text: "Sehr leckere Pizza, schnelle Lieferung und sehr freundliches Personal. Wir bestellen immer wieder gerne.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=60&h=60"
  },
  {
    id: 2,
    author: "Ralf Müller",
    rating: 5,
    date: "vor 1 Jahr",
    text: "Sehr gute Pizza, schnelle Lieferung. Immer wieder gerne.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60&h=60"
  },
  {
    id: 3,
    author: "Petra Schmidt",
    rating: 4,
    date: "vor 6 Monaten",
    text: "Sehr leckere Pizza, nettes Personal. Die Lieferung war pünktlich und die Pizza noch heiß.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60&h=60"
  },
  {
    id: 4,
    author: "Michael Weber",
    rating: 5,
    date: "vor 3 Monaten",
    text: "Beste Pizza in Cuxhaven! Immer frisch und heiß geliefert. Das Personal ist sehr freundlich.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=60&h=60"
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-white dark:bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-yellow-400">4.1</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                  }`}
                  fill={i < 4 ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-400">(115 Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 dark:bg-[#121212] p-6 rounded-lg shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-red-500/20" />
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {review.author}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill={i < review.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Pizza+Galaxy/@53.8677661,8.7066746,17z/data=!4m8!3m7!1s0x47b40f7b8d3a8b1d:0x4f3b6a0c5c2c5f0a!8m2!3d53.8677661!4d8.7066746!9m1!1b1!16s%2Fg%2F1q5bm6z_z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
          >
            View all reviews on Google
            <Star className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
} 