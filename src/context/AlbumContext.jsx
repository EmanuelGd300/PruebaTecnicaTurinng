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
    return saved ? JSON.parse(saved) : [0, 0, 0, 0];
  });

  useEffect(() => {
    localStorage.setItem('starWarsAlbum', JSON.stringify(album));
  }, [album]);

  useEffect(() => {
    localStorage.setItem('packTimers', JSON.stringify(packTimers));
  }, [packTimers]);

  const addCard = (type, id, data) => {
    setAlbum(prev => ({
      ...prev,
      [type + 's']: { ...prev[type + 's'], [id]: data }
    }));
  };

  const hasCard = (type, id) => {
    return !!album[type + 's']?.[id];
  };

  const lockPacks = (currentIndex) => {
    const newTimers = packTimers.map((_, idx) => 
      idx === currentIndex ? 0 : 60
    );
    setPackTimers(newTimers);
  };

  const decrementTimer = (index) => {
    setPackTimers(prev => {
      const newTimers = [...prev];
      if (newTimers[index] > 0) newTimers[index]--;
      return newTimers;
    });
  };

  return (
    <AlbumContext.Provider value={{ 
      album, 
      addCard, 
      hasCard, 
      packTimers, 
      lockPacks, 
      decrementTimer 
    }}>
      {children}
    </AlbumContext.Provider>
  );
};
