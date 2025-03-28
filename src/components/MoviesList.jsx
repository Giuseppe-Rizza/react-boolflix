import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'

import MoviesCard from "./MovieCard";

export default function MoviesList() {

    const { movies, tvSeries } = useContext(GlobalContext);

    return (
        <>
            {movies.length > 0 && <h1 className="category">Film</h1>}
            <div className="movieContainerCard">
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>

            {tvSeries.length > 0 && <h1 className="category">Serie TV</h1>}
            <div className="movieContainerCard">
                {
                    tvSeries.map((tvSerie) => (
                        <MovieCard key={tvSerie.id} tvSerie={tvSerie} />
                    ))
                }
            </div>
        </>
    );
}