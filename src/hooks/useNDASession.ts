import { useCallback, useEffect, useState } from 'react';

const KEY = 'nda_accepted';

export function useNDASession() {
  const [accepted, setAccepted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return sessionStorage.getItem(KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (accepted) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [accepted]);

  const accept = useCallback((payload?: { name: string; email: string }) => {
    try {
      sessionStorage.setItem(KEY, '1');
      if (payload) {
        sessionStorage.setItem('nda_name', payload.name);
        sessionStorage.setItem('nda_email', payload.email);
        sessionStorage.setItem('nda_accepted_at', new Date().toISOString());
      }
    } catch {
      /* ignore */
    }
    setAccepted(true);
  }, []);

  return { accepted, accept };
}
