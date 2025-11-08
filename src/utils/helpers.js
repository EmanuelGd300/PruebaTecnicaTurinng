import { CARD_TYPES, CARD_LIMITS, SPECIAL_LIMITS } from '../services/swapiService';

export const generatePackConfiguration = () => {
  const config = Math.random() < 0.5 ? 1 : 2;
  const cards = [];
  
  if (config === 1) {
    cards.push({ type: CARD_TYPES.FILM, id: Math.floor(Math.random() * CARD_LIMITS.FILM) + 1 });
    cards.push({ type: CARD_TYPES.PERSON, id: Math.floor(Math.random() * CARD_LIMITS.PERSON) + 1 });
    cards.push({ type: CARD_TYPES.PERSON, id: Math.floor(Math.random() * CARD_LIMITS.PERSON) + 1 });
    cards.push({ type: CARD_TYPES.PERSON, id: Math.floor(Math.random() * CARD_LIMITS.PERSON) + 1 });
    cards.push({ type: CARD_TYPES.STARSHIP, id: Math.floor(Math.random() * CARD_LIMITS.STARSHIP) + 1 });
  } else {
    cards.push({ type: CARD_TYPES.PERSON, id: Math.floor(Math.random() * CARD_LIMITS.PERSON) + 1 });
    cards.push({ type: CARD_TYPES.PERSON, id: Math.floor(Math.random() * CARD_LIMITS.PERSON) + 1 });
    cards.push({ type: CARD_TYPES.PERSON, id: Math.floor(Math.random() * CARD_LIMITS.PERSON) + 1 });
    cards.push({ type: CARD_TYPES.STARSHIP, id: Math.floor(Math.random() * CARD_LIMITS.STARSHIP) + 1 });
    cards.push({ type: CARD_TYPES.STARSHIP, id: Math.floor(Math.random() * CARD_LIMITS.STARSHIP) + 1 });
  }
  
  return cards;
};

export const isSpecialCard = (type, id) => {
  if (type === CARD_TYPES.FILM && id <= SPECIAL_LIMITS.FILM) return true;
  if (type === CARD_TYPES.PERSON && id <= SPECIAL_LIMITS.PERSON) return true;
  if (type === CARD_TYPES.STARSHIP && id <= SPECIAL_LIMITS.STARSHIP) return true;
  return false;
};

export const getCardSection = (type) => {
  if (type === CARD_TYPES.FILM) return 'Películas';
  if (type === CARD_TYPES.PERSON) return 'Personajes';
  if (type === CARD_TYPES.STARSHIP) return 'Naves';
};
