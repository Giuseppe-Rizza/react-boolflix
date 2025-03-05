import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'

import MoviesCard from "./MoviesCard";

export default function MoviesList() {

    const { movies = [] } = useContext(GlobalContext);

    return (
        <>
            <div className="movieContainerCard">
                {
                    movies.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </>
    );
}