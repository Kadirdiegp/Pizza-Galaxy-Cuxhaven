import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
    title: 'Welcome to Pizza Galaxy',
    subtitle: 'Handcrafted with love, delivered to your doorstep',
    cta: 'Order Now',
    link: '/menu',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&q=80',
    title: 'Tuesday Special',
    subtitle: 'Get 2 Medium Pizzas for €18.99',
    cta: 'View Deal',
    link: '/deals',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80',
    title: 'Family Feast',
    subtitle: '2 Large Pizzas + Sides + Drinks',
    cta: 'Order Combo',
    link: '/deals',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full text-xl font-semibold transition-colors"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-red-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 