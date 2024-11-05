import { Tag, Star } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { Footer } from '../components/layout/footer';

interface Deal {
  id: string;
  name: string;
  description: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
  items: string[];
  validUntil: string;
  isPopular?: boolean;
}

const DEALS: Deal[] = [
  {
    id: '1',
    name: '2 for Tuesday',
    description: 'Jeden Dienstag zwei Medium Pizzen zum Sparpreis',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
    originalPrice: 25.98,
    dealPrice: 18.99,
    items: [
      '2 Medium Pizzen nach Wahl',
      'Gültig jeden Dienstag',
      'Nicht mit anderen Aktionen kombinierbar'
    ],
    validUntil: '31.12.2024',
    isPopular: true
  },
  {
    id: '2',
    name: 'Family Feast',
    description: 'Das perfekte Familien-Paket für einen gemütlichen Abend',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80',
    originalPrice: 45.99,
    dealPrice: 35.99,
    items: [
      '2 Large Pizzen nach Wahl',
      '1 Portion Pizzabrötchen',
      '1 großer Salat',
      '2 Softdrinks (1,5L)'
    ],
    validUntil: '31.12.2024'
  },
  {
    id: '3',
    name: 'Student Deal',
    description: 'Spezielles Angebot für Studenten mit gültigem Studentenausweis',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80',
    originalPrice: 18.99,
    dealPrice: 12.99,
    items: [
      '1 Medium Pizza nach Wahl',
      '1 Softdrink (0,5L)',
      'Gültig mit Studentenausweis',
      'Nicht mit anderen Aktionen kombinierbar'
    ],
    validUntil: '31.12.2024',
    isPopular: true
  },
  {
    id: '4',
    name: 'Party Pack',
    description: 'Ideal für Gruppen und Feiern',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80',
    originalPrice: 65.99,
    dealPrice: 49.99,
    items: [
      '3 Large Pizzen nach Wahl',
      '2 Portionen Chicken Wings',
      '1 Portion Mozzarella Sticks',
      '3 Softdrinks (1,5L)'
    ],
    validUntil: '31.12.2024'
  }
];

export function DealsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Aktuelle Angebote
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DEALS.map((deal) => (
              <div
                key={deal.id}
                className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-video">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    Spare {formatPrice(deal.originalPrice - deal.dealPrice)}
                  </div>
                  {deal.isPopular && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Beliebt
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {deal.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {deal.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {deal.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        {formatPrice(deal.originalPrice)}
                      </span>
                      <span className="block text-2xl font-bold text-red-500">
                        {formatPrice(deal.dealPrice)}
                      </span>
                    </div>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
                      Jetzt bestellen
                    </button>
                  </div>

                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Gültig bis {deal.validUntil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}