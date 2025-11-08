import { motion } from 'framer-motion';
import { isSpecialCard, getCardSection } from '../utils/helpers';
import { getCardIcon } from '../utils/imageHelper';

const Card = ({ type, id, data, onAdd, onDiscard, hasCard }) => {
  const isSpecial = isSpecialCard(type, id);
  const section = getCardSection(type);
  const icon = getCardIcon(type);

  return (
    <motion.div
      className={`${isSpecial ? 'special-card' : 'regular-card'} rounded-xl p-6 min-h-[400px] flex flex-col justify-between`}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div>
        <div className="flex justify-center mb-4">
          <img 
            src={icon} 
            alt={section}
            className="w-20 h-20 object-contain opacity-70"
          />
        </div>

        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            isSpecial ? 'bg-black text-yellow-400' : 'bg-gray-700 text-white'
          }`}>
            {isSpecial ? 'ESPECIAL' : 'REGULAR'}
          </span>
          <span className="text-2xl font-bold">#{id}</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{data.title || data.name}</h3>
        <p className={`text-sm mb-4 ${isSpecial ? 'text-gray-800' : 'text-gray-600'}`}>{section}</p>

        <div className="text-sm space-y-1">
          {data.director && <p>Director: {data.director}</p>}
          {data.release_date && <p>Fecha: {data.release_date}</p>}
          {data.height && <p>Altura: {data.height}</p>}
          {data.gender && <p>Género: {data.gender}</p>}
          {data.model && <p>Modelo: {data.model}</p>}
          {data.manufacturer && <p>Fabricante: {data.manufacturer}</p>}
        </div>
      </div>

      <motion.button
        onClick={hasCard ? onDiscard : onAdd}
        className={`w-full py-3 rounded-lg font-bold mt-4 text-white ${
          hasCard 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-green-600 hover:bg-green-700'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {hasCard ? 'Descartar' : 'Agregar al Álbum'}
      </motion.button>
    </motion.div>
  );
};

export default Card;
