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

export const VALID_IDS = {
  FILM: [1, 2, 3, 4, 5, 6],
  PERSON: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83],
  STARSHIP: [2, 3, 5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48, 49, 52, 58, 59, 61, 63, 64, 65, 66, 68, 74, 75, 77, 79]
};
