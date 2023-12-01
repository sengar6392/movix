import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjk2ZjE1ZjI5ODUwZWFlMzVhNTBkOGExYzUwZWM2YSIsInN1YiI6IjY1Njg3MjYzOWFmZmMwMDBjYTRlMDBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U6vn0aVEwY1AC6q-9ebYHXC-z3HEwRITAJ03Pq1KpHk"

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
