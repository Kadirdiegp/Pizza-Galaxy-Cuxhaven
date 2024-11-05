import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Coffee, IceCream, Sandwich } from 'lucide-react';

const categories = [
  {
    id: 'pizzas',
    name: 'Pizzas',
    icon: Pizza,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80',
    link: '/menu#pizzas'
  },
  {
    id: 'sides',
    name: 'Sides',
    icon: Sandwich,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80',
    link: '/menu#sides'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80',
    link: '/menu#drinks'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: IceCream,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80',
    link: '/menu#desserts'
  }
];

export function QuickMenu() {
  return (
    <section className="py-12 bg-white dark:bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Quick Menu
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <category.icon className="w-10 h-10 mb-2" />
                  <span className="text-lg font-semibold">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 