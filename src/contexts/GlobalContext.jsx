import { createContext } from "react";

const GlobalContext = createContext({
    movies: [],
    tvSeries: [],
    fetchData: () => { }
});

export default GlobalContext;