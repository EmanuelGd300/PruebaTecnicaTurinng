import peliculasIcon from '../assets/ico/Peliculas.ico';
import personajesIcon from '../assets/ico/Personajes.ico';
import navesIcon from '../assets/ico/Naves.ico';

export const getCardGradient = (type, id) => {
  const isSpecial = (type === 'film' && id <= 6) || (type === 'person' && id <= 20) || (type === 'starship' && id <= 10);
  
  if (isSpecial) {
    return 'linear-gradient(135deg, #FFE81F 0%, #FFA500 100%)';
  }
  return 'linear-gradient(135deg, #E8E8E8 0%, #B8B8B8 100%)';
};

export const getCardIcon = (type) => {
  const icons = {
    film: peliculasIcon,
    person: personajesIcon,
    starship: navesIcon
  };
  return icons[type] || personajesIcon;
};
