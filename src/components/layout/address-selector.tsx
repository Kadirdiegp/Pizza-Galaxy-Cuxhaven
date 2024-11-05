import React, { useState } from 'react';
import { Search, MapPin, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { useDeliveryStore } from '../../stores/delivery';

interface AddressSelectorProps {
  onAddressSelect: (address: string) => void;
}

interface AddressSuggestion {
  display_name: string;
  distance: number;
  isInDeliveryArea: boolean;
}

const RESTAURANT_LOCATION = {
  lat: 53.8677661,
  lng: 8.7066746
};

const MAX_DELIVERY_DISTANCE = 5000; // 5km in Metern

export function AddressSelector({ onAddressSelect }: AddressSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const { setAddress } = useDeliveryStore();

  // Funktion zur Berechnung der Entfernung zwischen zwei Punkten
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371e3; // Erdradius in Metern
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
  };

  const fetchAddresses = async (query: string) => {
    if (query.length < 3) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)},Cuxhaven&format=json&limit=5&countrycodes=de`,
        {
          headers: {
            'Accept-Language': 'de'
          }
        }
      );
      
      const data = await response.json();
      
      const suggestions = data.map((item: any) => {
        const distance = calculateDistance(
          RESTAURANT_LOCATION.lat,
          RESTAURANT_LOCATION.lng,
          parseFloat(item.lat),
          parseFloat(item.lon)
        );
        
        return {
          display_name: item.display_name,
          distance: distance,
          isInDeliveryArea: distance <= MAX_DELIVERY_DISTANCE
        };
      });

      setSuggestions(suggestions);
    } catch (error) {
      console.error('Fehler beim Abrufen der Adressen:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (debouncedSearch.length >= 3) {
      fetchAddresses(debouncedSearch);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearch]);

  const handleAddressSelect = (suggestion: AddressSuggestion) => {
    const fullAddress = suggestion.display_name;
    setSelectedAddress(fullAddress);
    onAddressSelect(fullAddress);
    setAddress(fullAddress);
    setIsOpen(false);
  };

  // JSX bleibt größtenteils gleich, nur die Anzeige der Vorschläge ändert sich leicht
  return (
    <div className="relative">
      {/* Adressbutton */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-3 bg-gray-100 dark:bg-[#1E1E1E] rounded-lg flex items-center justify-between"
      >
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <MapPin className="w-5 h-5" />
          <span>{selectedAddress || 'Lieferadresse auswählen'}</span>
        </div>
        <Search className="w-5 h-5 text-gray-400" />
      </button>

      {/* Adress-Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[300] bg-white dark:bg-[#121212]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lieferadresse eingeben
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sucheingabe */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Straße und Hausnummer eingeben..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-[#1E1E1E] text-gray-900 dark:text-white rounded-lg border-2 border-transparent focus:border-red-500 focus:ring-0 transition-colors"
              />
            </div>

            {/* Ladeindikator */}
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500" />
              </div>
            )}

            {/* Adressvorschläge */}
            {!isLoading && suggestions.length > 0 && (
              <div className="mt-4 space-y-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.display_name}
                    onClick={() => handleAddressSelect(suggestion)}
                    className="w-full text-left p-4 bg-gray-50 dark:bg-[#1E1E1E] rounded-lg hover:bg-gray-100 dark:hover:bg-[#252525] transition-colors"
                    disabled={!suggestion.isInDeliveryArea}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className={`w-5 h-5 mt-0.5 ${suggestion.isInDeliveryArea ? 'text-red-500' : 'text-gray-400'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {suggestion.display_name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {(suggestion.distance / 1000).toFixed(1)} km
                          </span>
                        </div>
                        {suggestion.isInDeliveryArea ? (
                          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
                            <CheckCircle className="w-4 h-4" />
                            <span>Lieferung möglich</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-sm text-red-500 mt-1">
                            <AlertCircle className="w-4 h-4" />
                            <span>Außerhalb des Liefergebiets</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Keine Ergebnisse */}
            {!isLoading && searchQuery.length >= 3 && suggestions.length === 0 && (
              <div className="text-center py-8">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 dark:text-gray-400">
                  Keine Adressen gefunden
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Bitte überprüfen Sie Ihre Eingabe
                </p>
              </div>
            )}

            {/* Initial-State */}
            {!isLoading && searchQuery.length < 3 && (
              <div className="text-center py-8 text-gray-500">
                Geben Sie mindestens 3 Zeichen ein, um die Suche zu starten
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 