import { motion } from 'framer-motion';
import sobre1 from '../assets/images/Sobre1.png';
import sobre2 from '../assets/images/Sobre2.png';
import sobre3 from '../assets/images/Sobre3.png';
import sobre4 from '../assets/images/Sobre4.png';

const packImages = [sobre1, sobre2, sobre3, sobre4];

const Pack = ({ index, onOpen, isLocked, timer }) => {

  return (
    <motion.div
      className="relative"
      whileHover={!isLocked ? { scale: 1.05 } : {}}
      whileTap={!isLocked ? { scale: 0.95 } : {}}
    >
      <motion.button
        onClick={() => !isLocked && onOpen(index)}
        disabled={isLocked}
        className={`w-64 h-80 rounded-xl flex flex-col items-center justify-center relative overflow-hidden ${
          isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <img 
          src={packImages[index]} 
          alt={`Sobre ${index + 1}`}
          className="w-full h-full object-contain"
        />
        
        {isLocked && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔒</div>
            <div className="text-3xl font-bold text-white">
              {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
};

export default Pack;
