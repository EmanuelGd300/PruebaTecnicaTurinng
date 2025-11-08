import marcaImg from '../assets/images/Marca.jpg';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 border-t-2 border-star-yellow mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <img 
              src={marcaImg} 
              alt="Emanuel Gómez Díaz" 
              className="w-24 h-24 rounded-full object-cover border-2 border-star-yellow"
            />
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold text-star-yellow">Emanuel Gómez Díaz</h3>
              <p className="text-lg">Desarrollador Full Stack / Frontend</p>
            </div>
          </div>

          <div className="text-white text-center space-y-2">
            <a href="mailto:emmanuelgodi22@gmail.com" className="hover:text-star-yellow transition-colors block">
              emmanuelgodi22<span style={{fontFamily: 'sans-serif'}}>@</span>gmail.com
            </a>
            <a href="tel:3136640809" className="hover:text-star-yellow transition-colors block">
              313 664 0809
            </a>
            <a 
              href="https://www.linkedin.com/in/egodi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-star-yellow transition-colors block"
            >
              LinkedIn
            </a>
            <a 
              href="https://689f8d330b54b40008d1d849--emanuel-gomez-diaz.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-star-yellow transition-colors block"
            >
              Portafolio
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-6 pt-6 border-t border-gray-700">
          <p>© 2025 Emanuel Gómez Díaz - Star Wars Album - Prueba Técnica Turinng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
