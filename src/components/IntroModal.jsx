import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import introVideo from '../assets/videos/Intro.mp4';

const IntroModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowModal(true);
    }
  }, []);

  const handleYes = () => {
    setShowVideo(true);
    setShowModal(false);
  };

  const handleNo = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowModal(false);
  };

  const handleVideoEnd = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowVideo(false);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 max-w-md w-full text-white border-2 border-star-yellow"
              initial={{ scale: 0.8, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
            >
              <h2 className="text-3xl font-bold text-star-yellow text-center mb-6 star-wars-font">
                Bienvenido
              </h2>
              <p className="text-xl text-center mb-8">
                ¿Quieres ver el video introductorio de la app?
              </p>
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={handleYes}
                  className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sí
                </motion.button>
                <motion.button
                  onClick={handleNo}
                  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  No
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={handleVideoEnd}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-star-yellow"
              >
                ×
              </button>
              <video
                src={introVideo}
                controls
                autoPlay
                onEnded={handleVideoEnd}
                className="w-full rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IntroModal;
