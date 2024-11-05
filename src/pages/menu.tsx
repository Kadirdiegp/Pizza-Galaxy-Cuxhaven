import { useMenuStore } from '../stores/menu';
import { PizzaCard } from '../components/menu/pizza-card';
import { DessertCard } from '../components/menu/dessert-card';
import { DrinkCard } from '../components/menu/drink-card';
import { SideCard } from '../components/menu/side-card';

export function MenuPage() {
  const { pizzas, desserts, drinks, sides } = useMenuStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pizzen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Unsere Pizzen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </section>

        {/* Beilagen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Beilagen & Salate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sides.map((side) => (
              <SideCard key={side.id} side={side} />
            ))}
          </div>
        </section>

        {/* Desserts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Desserts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <DessertCard key={dessert.id} dessert={dessert} />
            ))}
          </div>
        </section>

        {/* Getränke */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Getränke
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}