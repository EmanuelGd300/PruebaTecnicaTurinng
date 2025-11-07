import { motion } from 'framer-motion';
import { isSpecialCard, getCardSection } from '../utils/helpers';
import { getCardGradient, getCardIcon } from '../utils/imageHelper';

const Card = ({ type, id, data, onAdd, onDiscard, hasCard }) => {
  const isSpecial = isSpecialCard(type, id);
  const section = getCardSection(type);
  const gradient = getCardGradient(type, id);
  const icon = getCardIcon(type);

  return (
    <motion.div
      className="rounded-xl overflow-hidden text-white min-h-[500px] flex flex-col shadow-2xl"
      style={{ background: gradient }}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-64 flex items-center justify-center bg-black bg-opacity-20">
        <img 
          src={icon} 
          alt={section}
          className="w-32 h-32 object-contain opacity-80"
        />
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            isSpecial ? 'bg-yellow-400 text-black' : 'bg-gray-600'
          }`}>
            {isSpecial ? 'ESPECIAL' : 'REGULAR'}
          </span>
          <span className="text-2xl font-bold bg-black bg-opacity-70 px-3 py-1 rounded-full">#{id}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between bg-black bg-opacity-30">
        <div>
          <h3 className="text-xl font-bold mb-2">{data.title || data.name}</h3>
          <p className="text-sm text-gray-200 mb-4">{section}</p>

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
          className={`w-full py-3 rounded-lg font-bold mt-4 ${
            hasCard 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {hasCard ? 'Descartar' : 'Agregar al Álbum'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
