import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'

import MoviesCard from "./MoviesCard";

export default function MoviesList() {

    const { movies = [], tvSeries = [] } = useContext(GlobalContext);

    return (
        <>
            <h1>Film</h1>
            <div className="movieContainerCard">
                {
                    movies.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie} />
                    ))
                }
            </div>

            <h1>Serie TV</h1>
            <div className="movieContainerCard">
                {
                    tvSeries.map((tvSerie) => (
                        <MoviesCard key={tvSerie.id} tvSerie={tvSerie} />
                    ))
                }
            </div>
        </>
    );
}