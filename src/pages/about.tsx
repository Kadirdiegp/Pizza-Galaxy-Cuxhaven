import { Footer } from '../components/layout/footer';
import { Star, Award, Users, Clock, Leaf, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Über uns</h1>
          
          {/* Hero Section */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Unsere Geschichte
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Willkommen bei Pizza Galaxy - Ihrem Pizza-Lieferservice in Cuxhaven! 
                  Seit 2020 servieren wir authentische italienische Pizza, zubereitet 
                  mit frischen Zutaten und traditionellen Rezepten.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" 
                  alt="Pizza Galaxy Restaurant" 
                  className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Qualität</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Nur die besten Zutaten für unsere Pizzen. Wir verwenden ausschließlich 
                hochwertige, frische Produkte.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Schnell</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Garantierte Lieferung innerhalb von 30-45 Minuten in unserem Liefergebiet.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frisch</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Täglich frische Zutaten von lokalen Lieferanten für den besten Geschmack.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Unser Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                    alt="Unser Chefkoch" 
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-red-500 text-white p-2 rounded-full">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Marco Rossi
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Chefkoch</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  15 Jahre Erfahrung in der italienischen Küche
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                    alt="Restaurant Manager" 
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lisa Schmidt
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Restaurant Managerin</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Sorgt für einen reibungslosen Ablauf
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80" 
                    alt="Lieferservice Leiter" 
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tom Meyer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Lieferservice Leiter</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Koordiniert unseren Lieferservice
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Unsere Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Wir bei Pizza Galaxy haben es uns zur Aufgabe gemacht, die authentische 
              italienische Küche nach Cuxhaven zu bringen. Mit unserer Kombination aus 
              traditionellen Rezepten und modernen Zubereitungsmethoden schaffen wir 
              ein einzigartiges Geschmackserlebnis für unsere Kunden.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}