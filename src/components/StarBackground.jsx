import backgroundGif from '../assets/background/Background.gif';

const StarBackground = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        backgroundImage: `url(${backgroundGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default StarBackground;
