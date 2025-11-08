import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pack from './Pack';
import Card from './Card';
import { useAlbum } from '../context/AlbumContext';
import { generatePackConfiguration } from '../utils/helpers';
import { fetchFilm, fetchPerson, fetchStarship } from '../services/swapiService';

const PackOpening = () => {
  const { lockPack, getPackTimer, hasCard, addCard } = useAlbum();
  const [openedCards, setOpenedCards] = useState([]);
  const [currentPackIndex, setCurrentPackIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [actionsCompleted, setActionsCompleted] = useState({});

  const handleOpenPack = async (index) => {
    setLoading(true);
    setCurrentPackIndex(index);
    lockPack(index);
    
    const config = generatePackConfiguration();
    const cards = [];
    
    for (const { type, id } of config) {
      try {
        let data;
        if (type === 'film') data = await fetchFilm(id);
        else if (type === 'person') data = await fetchPerson(id);
        else data = await fetchStarship(id);
        if (data) cards.push({ type, id, data });
      } catch (error) {
        console.error(`Error fetching ${type} ${id}:`, error);
      }
    }

    setOpenedCards(cards);
    setActionsCompleted({});
    setLoading(false);
  };

  const handleAction = (index, type, id, data, isAdd) => {
    if (isAdd) addCard(type, id, data);
    setActionsCompleted(prev => ({ ...prev, [index]: true }));
  };

  const handleClosePack = () => {
    setOpenedCards([]);
    setCurrentPackIndex(null);
  };

  const allActionsCompleted = openedCards.length > 0 && 
    Object.keys(actionsCompleted).length === openedCards.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        {openedCards.length === 0 ? (
          <motion.div
            key="packs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-4xl font-bold text-star-yellow text-center mb-12 star-wars-font">
              Selecciona un Sobre
            </h2>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-white text-2xl">Abriendo sobre...</div>
              </div>
            ) : (
              <div className="flex justify-center gap-8 flex-wrap">
                {[0, 1, 2, 3].map(i => (
                  <Pack
                    key={i}
                    index={i}
                    onOpen={handleOpenPack}
                    isLocked={getPackTimer(i) > 0}
                    timer={getPackTimer(i)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-4xl font-bold text-star-yellow text-center mb-8 star-wars-font">
              ¡Tus Láminas!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
              {openedCards.map((card, idx) => (
                <Card
                  key={idx}
                  type={card.type}
                  id={card.id}
                  data={card.data}
                  hasCard={hasCard(card.type, card.id)}
                  onAdd={() => handleAction(idx, card.type, card.id, card.data, true)}
                  onDiscard={() => handleAction(idx, card.type, card.id, card.data, false)}
                />
              ))}
            </div>

            {allActionsCompleted && (
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <button
                  onClick={handleClosePack}
                  className="bg-star-yellow text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
                >
                  Abrir otro Sobre
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackOpening;
