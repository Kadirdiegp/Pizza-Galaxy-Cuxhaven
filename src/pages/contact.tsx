import { MapPin, Phone, Mail } from 'lucide-react';
import { Footer } from '../components/layout/footer';

export function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Kontakt</h1>
          
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 space-y-8">
            {/* Kontaktinformationen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-[#252525] rounded-lg">
                <MapPin className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Adresse</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Poststraße 35<br />
                  27474 Cuxhaven
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-[#252525] rounded-lg">
                <Phone className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Telefon</h3>
                <p className="text-gray-600 dark:text-gray-300">04721 690101</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Mo-So: 11:00 - 23:00
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-[#252525] rounded-lg">
                <Mail className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">E-Mail</h3>
                <p className="text-gray-600 dark:text-gray-300">info@pizzagalaxy.de</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Antwort innerhalb von 24h
                </p>
              </div>
            </div>

            {/* Karte */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Hier finden Sie uns
              </h2>
              <div className="aspect-[16/9] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.704872131347658%2C53.86686692800834%2C8.708477020263674%2C53.86856692800834&layer=mapnik&marker=53.8677661%2C8.7066746"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Öffnungszeiten
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-medium">Montag - Donnerstag</p>
                  <p>11:00 - 23:00</p>
                </div>
                <div>
                  <p className="font-medium">Freitag - Samstag</p>
                  <p>11:00 - 00:00</p>
                </div>
                <div>
                  <p className="font-medium">Sonntag</p>
                  <p>12:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}