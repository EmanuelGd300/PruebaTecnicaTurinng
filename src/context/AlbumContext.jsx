import { createContext, useContext, useState, useEffect } from 'react';

const AlbumContext = createContext();

export const useAlbum = () => useContext(AlbumContext);

export const AlbumProvider = ({ children }) => {
  const [album, setAlbum] = useState(() => {
    const saved = localStorage.getItem('starWarsAlbum');
    return saved ? JSON.parse(saved) : { films: {}, people: {}, starships: {} };
  });

  const [packTimers, setPackTimers] = useState(() => {
    const saved = localStorage.getItem('packTimers');
    return saved ? JSON.parse(saved) : {};
  });

  const [showClearModal, setShowClearModal] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);

  const handleClearStorage = () => {
    localStorage.clear();
    setShowClearModal(false);
    window.location.href = '/';
  };

  useEffect(() => {
    localStorage.setItem('starWarsAlbum', JSON.stringify(album));
  }, [album]);

  useEffect(() => {
    localStorage.setItem('packTimers', JSON.stringify(packTimers));
  }, [packTimers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPackTimers(prev => {
        const updated = { ...prev };
        let changed = false;
        Object.keys(updated).forEach(key => {
          if (updated[key] > 0) {
            updated[key]--;
            changed = true;
          }
        });
        return changed ? updated : prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addCard = (type, id, data) => {
    setAlbum(prev => ({
      ...prev,
      [type + 's']: { ...prev[type + 's'], [id]: data }
    }));
  };

  const hasCard = (type, id) => {
    return !!album[type + 's']?.[id];
  };

  const lockAllPacks = () => {
    setPackTimers({ 0: 60, 1: 60, 2: 60, 3: 60 });
  };

  const getPackTimer = (index) => {
    return packTimers[index] || 0;
  };

  return (
    <AlbumContext.Provider value={{ 
      album, 
      addCard, 
      hasCard, 
      lockAllPacks,
      getPackTimer,
      showClearModal,
      setShowClearModal,
      showIntroModal,
      setShowIntroModal,
      handleClearStorage
    }}>
      {children}
    </AlbumContext.Provider>
  );
};
