import { createContext } from "react";

const GlobalContext = createContext({
    movies: [],
    fetchData: () => { }
});

export default GlobalContext;