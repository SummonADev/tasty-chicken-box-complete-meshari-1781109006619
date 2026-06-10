import { useState, useEffect } from 'react';

type OpenStatus = {
  isOpen: boolean;
  statusText: string;
  closingTime: string;
};

export function useIsOpen(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>({ isOpen: false, statusText: 'Closed', closingTime: '' });

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const hour = now.getHours();
      const minute = now.getMinutes();
      const timeDecimal = hour + minute / 60;

      // Mon-Thu: 11AM-1AM (next day)
      // Fri-Sat: 11AM-3AM (next day)
      // Sun: 12PM-1AM (next day)

      let isOpen = false;
      let closingTime = '';

      if (day === 0) { // Sunday
        isOpen = timeDecimal >= 12 || timeDecimal < 1;
        closingTime = '1AM';
      } else if (day >= 1 && day <= 4) { // Mon-Thu
        isOpen = timeDecimal >= 11 || timeDecimal < 1;
        closingTime = '1AM';
      } else if (day === 5 || day === 6) { // Fri-Sat
        isOpen = timeDecimal >= 11 || timeDecimal < 3;
        closingTime = '3AM';
      }

      setStatus({
        isOpen,
        statusText: isOpen ? 'Open Now' : 'Closed',
        closingTime: isOpen ? `Closes at ${closingTime}` : 'See hours below',
      });
    };

    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
