import { useState, useEffect } from 'react';

interface StoreHours {
  isOpen: boolean;
  openingTime: string;
  closingTime: string;
}

const STORE_HOURS = {
  1: { open: '11:00', close: '23:00' }, // Monday
  2: { open: '11:00', close: '23:00' }, // Tuesday
  3: { open: '11:00', close: '23:00' }, // Wednesday
  4: { open: '11:00', close: '23:00' }, // Thursday
  5: { open: '11:00', close: '00:00' }, // Friday
  6: { open: '11:00', close: '00:00' }, // Saturday
  0: { open: '12:00', close: '23:00' }, // Sunday
};

export function useStoreHours(): StoreHours {
  const [storeStatus, setStoreStatus] = useState<StoreHours>({
    isOpen: false,
    openingTime: '',
    closingTime: '',
  });

  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = STORE_HOURS[day as keyof typeof STORE_HOURS];
      
      const currentTime = now.getHours() * 100 + now.getMinutes();
      const [openHour, openMinute] = hours.open.split(':').map(Number);
      const [closeHour, closeMinute] = hours.close.split(':').map(Number);
      
      const openingTime = openHour * 100 + openMinute;
      const closingTime = closeHour * 100 + closeMinute;

      setStoreStatus({
        isOpen: currentTime >= openingTime && currentTime < closingTime,
        openingTime: hours.open,
        closingTime: hours.close,
      });
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return storeStatus;
} 