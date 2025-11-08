import { motion, AnimatePresence } from 'framer-motion';
import { useAlbum } from '../context/AlbumContext';

const GlobalModals = () => {
  const { showClearModal, setShowClearModal, showIntroModal, setShowIntroModal, handleClearStorage } = useAlbum();

  return (
    <AnimatePresence>
      {showClearModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowClearModal(false)}
        >
          <motion.div
            className="bg-gray-900 p-8 rounded-xl max-w-md text-white border-2 border-star-yellow"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-star-yellow">¿Limpiar Local Storage?</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              La información de la API se guarda en el Local Storage para evitar un desarrollo backend robusto y dedicarle más tiempo al frontend. 
              Al limpiarlo se borrará el álbum y las cartas obtenidas. ¿Está seguro?
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleClearStorage}
                className="flex-1 bg-star-yellow hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition-colors"
              >
                Sí, limpiar
              </button>
              <button
                onClick={() => setShowClearModal(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-colors"
              >
                No, cancelar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showIntroModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[100] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowIntroModal(false)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowIntroModal(false)}
              className="absolute -top-12 right-0 text-white text-5xl hover:text-star-yellow transition-colors font-bold"
            >
              ×
            </button>
            <video
              src="/src/assets/videos/Intro.mp4"
              controls
              autoPlay
              className="w-full rounded-xl border-2 border-star-yellow"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalModals;
