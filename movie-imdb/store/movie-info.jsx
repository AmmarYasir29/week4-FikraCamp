import create from "zustand";

const nameOfun = create((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
}));
export default nameOfun;
