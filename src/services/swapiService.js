import axios from 'axios';

const API_BASE = 'https://swapi.dev/api';

export const fetchFilm = async (id) => {
  const { data } = await axios.get(`${API_BASE}/films/${id}/`);
  return data;
};

export const fetchPerson = async (id) => {
  const { data } = await axios.get(`${API_BASE}/people/${id}/`);
  return data;
};

export const fetchStarship = async (id) => {
  const { data } = await axios.get(`${API_BASE}/starships/${id}/`);
  return data;
};

export const CARD_TYPES = {
  FILM: 'film',
  PERSON: 'person',
  STARSHIP: 'starship'
};

export const CARD_LIMITS = {
  FILM: 6,
  PERSON: 82,
  STARSHIP: 36
};

export const SPECIAL_LIMITS = {
  FILM: 6,
  PERSON: 20,
  STARSHIP: 10
};
