import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AlbumProvider } from './context/AlbumContext';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import PackOpening from './components/PackOpening';
import Album from './components/Album';
import Footer from './components/Footer';
import IntroModal from './components/IntroModal';

function App() {
  return (
    <AlbumProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <StarBackground />
          <IntroModal />
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/packs" replace />} />
              <Route path="/packs" element={<PackOpening />} />
              <Route path="/album" element={<Album />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AlbumProvider>
  );
}

export default App;
