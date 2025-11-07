import peliculasIcon from '../assets/ico/Peliculas.ico';
import personajesIcon from '../assets/ico/Personajes.ico';
import navesIcon from '../assets/ico/Naves.ico';

export const getCardGradient = (type, id) => {
  const gradients = {
    film: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    ],
    person: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    ],
    starship: [
      'linear-gradient(135deg, #434343 0%, #000000 100%)',
      'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      'linear-gradient(135deg, #232526 0%, #414345 100%)',
      'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    ]
  };

  const typeGradients = gradients[type] || gradients.person;
  return typeGradients[(id - 1) % typeGradients.length];
};

export const getCardIcon = (type) => {
  if (type === 'film') return peliculasIcon;
  if (type === 'person') return personajesIcon;
  if (type === 'starship') return navesIcon;
  return personajesIcon;
};
