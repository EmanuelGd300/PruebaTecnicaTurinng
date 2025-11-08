import { CARD_TYPES, CARD_LIMITS, SPECIAL_LIMITS } from '../services/swapiService';

const getRandomId = (limit) => Math.floor(Math.random() * limit) + 1;

export const generatePackConfiguration = () => {
  const config = Math.random() < 0.5 ? 1 : 2;
  
  if (config === 1) {
    return [
      { type: CARD_TYPES.FILM, id: getRandomId(CARD_LIMITS.FILM) },
      { type: CARD_TYPES.PERSON, id: getRandomId(CARD_LIMITS.PERSON) },
      { type: CARD_TYPES.PERSON, id: getRandomId(CARD_LIMITS.PERSON) },
      { type: CARD_TYPES.PERSON, id: getRandomId(CARD_LIMITS.PERSON) },
      { type: CARD_TYPES.STARSHIP, id: getRandomId(CARD_LIMITS.STARSHIP) }
    ];
  }
  
  return [
    { type: CARD_TYPES.PERSON, id: getRandomId(CARD_LIMITS.PERSON) },
    { type: CARD_TYPES.PERSON, id: getRandomId(CARD_LIMITS.PERSON) },
    { type: CARD_TYPES.PERSON, id: getRandomId(CARD_LIMITS.PERSON) },
    { type: CARD_TYPES.STARSHIP, id: getRandomId(CARD_LIMITS.STARSHIP) },
    { type: CARD_TYPES.STARSHIP, id: getRandomId(CARD_LIMITS.STARSHIP) }
  ];
};

export const isSpecialCard = (type, id) => {
  const limits = {
    [CARD_TYPES.FILM]: SPECIAL_LIMITS.FILM,
    [CARD_TYPES.PERSON]: SPECIAL_LIMITS.PERSON,
    [CARD_TYPES.STARSHIP]: SPECIAL_LIMITS.STARSHIP
  };
  return id <= (limits[type] || 0);
};

export const getCardSection = (type) => {
  const sections = {
    [CARD_TYPES.FILM]: 'Películas',
    [CARD_TYPES.PERSON]: 'Personajes',
    [CARD_TYPES.STARSHIP]: 'Naves'
  };
  return sections[type];
};
