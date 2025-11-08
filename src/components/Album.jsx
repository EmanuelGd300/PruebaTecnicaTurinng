import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAlbum } from '../context/AlbumContext';
import { CARD_LIMITS } from '../services/swapiService';
import { fetchFilm, fetchPerson, fetchStarship } from '../services/swapiService';
import { isSpecialCard } from '../utils/helpers';
import { getCardGradient, getCardIcon } from '../utils/imageHelper';

const Album = () => {
  const { album } = useAlbum();
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCardClick = async (type, id) => {
    setLoading(true);
    setSelectedCard({ type, id });
    
    try {
      let data;
      if (type === 'film') data = await fetchFilm(id);
      else if (type === 'person') data = await fetchPerson(id);
      else data = await fetchStarship(id);
      setCardDetails(data);
    } catch (error) {
      console.error(error);
    }
    
    setLoading(false);
  };

  const renderSection = (title, type, limit) => {
    const cards = album[type + 's'] || {};
    
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-star-yellow mb-6 star-wars-font">{title}</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
          {Array.from({ length: limit }, (_, i) => {
            const id = i + 1;
            const card = cards[id];
            const isSpecial = isSpecialCard(type, id);
            const gradient = getCardGradient(type, id);
            const icon = getCardIcon(type);
            
            return (
              <motion.div
                key={id}
                className="aspect-square rounded-lg overflow-hidden flex items-center justify-center cursor-pointer relative"
                style={card ? { background: gradient } : {}}
                whileHover={{ scale: card ? 1.1 : 1 }}
                onClick={() => card && handleCardClick(type, id)}
              >
                {card ? (
                  <>
                    <img 
                      src={icon} 
                      alt={card.title || card.name}
                      className="w-12 h-12 object-contain opacity-60"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-1">
                      <div className="text-xs text-white truncate text-center">
                        {card.title || card.name}
                      </div>
                    </div>
                    {isSpecial && (
                      <div className="absolute top-1 right-1">
                        <span className="text-yellow-400 text-lg">⭐</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={`text-center p-2 border-2 w-full h-full flex items-center justify-center ${
                    isSpecial ? 'bg-yellow-500 border-yellow-600' : 'bg-gray-600 border-gray-700'
                  }`}>
                    <div className="text-xl font-bold text-white">{id}</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold text-star-yellow text-center mb-12 star-wars-font">
        MI ÁLBUM
      </h2>

      {renderSection('Películas', 'film', CARD_LIMITS.FILM)}
      {renderSection('Personajes', 'person', CARD_LIMITS.PERSON)}
      {renderSection('Naves', 'starship', CARD_LIMITS.STARSHIP)}

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="rounded-xl overflow-hidden max-w-md w-full text-white shadow-2xl"
              style={{ background: getCardGradient(selectedCard.type, selectedCard.id) }}
              initial={{ scale: 0.8, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
              onClick={(e) => e.stopPropagation()}
            >
              {loading ? (
                <div className="text-center text-xl p-6">Cargando...</div>
              ) : cardDetails ? (
                <div>
                  <div className="relative h-48 flex items-center justify-center bg-black bg-opacity-20">
                    <img 
                      src={getCardIcon(selectedCard.type)} 
                      alt="Icon"
                      className="w-24 h-24 object-contain opacity-60"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        isSpecialCard(selectedCard.type, selectedCard.id) 
                          ? 'bg-yellow-400 text-black' 
                          : 'bg-gray-600 text-white'
                      }`}>
                        {isSpecialCard(selectedCard.type, selectedCard.id) ? 'ESPECIAL' : 'REGULAR'}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="absolute top-2 right-2 text-3xl hover:text-star-yellow bg-black bg-opacity-70 w-10 h-10 rounded-full"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="p-4 bg-black bg-opacity-30">
                    <h3 className="text-xl font-bold mb-3">{cardDetails.title || cardDetails.name}</h3>
                    
                    <div className="space-y-1 text-sm">
                      {Object.entries(cardDetails).map(([key, value]) => {
                        if (typeof value === 'string' && !key.includes('url') && !key.includes('created') && !key.includes('edited')) {
                          return (
                            <p key={key}>
                              <span className="font-bold capitalize">{key.replace('_', ' ')}:</span> {value}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Album;
