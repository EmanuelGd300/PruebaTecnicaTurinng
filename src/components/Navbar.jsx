import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAlbum } from '../context/AlbumContext';

const Navbar = () => {
  const location = useLocation();
  const { setShowClearModal, setShowIntroModal } = useAlbum();

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-sm border-b-2 border-star-yellow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-star-yellow star-wars-font"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            STAR WARS ALBuM
          </motion.h1>
          
          <div className="flex gap-3">
            <motion.button
              onClick={() => setShowIntroModal(true)}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-800 text-white hover:bg-gray-700 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ver intro
            </motion.button>

            <motion.button
              onClick={() => setShowClearModal(true)}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-800 text-white hover:bg-gray-700 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Limpiar Datos
            </motion.button>

            <Link to="/packs">
              <motion.button
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  location.pathname === '/packs'
                    ? 'bg-star-yellow text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={location.pathname !== '/packs' ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                obtener Láminas
              </motion.button>
            </Link>
            
            <Link to="/album">
              <motion.button
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  location.pathname === '/album'
                    ? 'bg-star-yellow text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={location.pathname !== '/album' ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                Mi Álbum
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
