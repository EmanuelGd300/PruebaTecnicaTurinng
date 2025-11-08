import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AlbumProvider } from './context/AlbumContext';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import PackOpening from './components/PackOpening';
import Album from './components/Album';
import Footer from './components/Footer';
import IntroModal from './components/IntroModal';
import GlobalModals from './components/GlobalModals';

function App() {
  return (
    <AlbumProvider>
      <BrowserRouter>
        <div className="min-h-screen text-white flex flex-col relative bg-black">
          <div className="absolute inset-0 z-0" style={{ 
            backgroundImage: 'url(/src/assets/background/Background.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.3
          }}></div>
          <StarBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <IntroModal />
            <GlobalModals />
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
        </div>
      </BrowserRouter>
    </AlbumProvider>
  );
}

export default App;
