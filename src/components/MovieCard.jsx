import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function MovieCard({ movie, tvSerie }) {

    const defaultFlag = "/flags/english.png";

    const renderStars = (vote) => {
        const numOfStars = Math.ceil(vote / 2);
        let stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < numOfStars) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                    />
                );

            } else {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#ccc" }}
                    />
                );
            }
        }

        return stars;


    };

    return (
        <>
            {movie && (
                <div className='movieCard' key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <h1>Title: {movie.title}</h1>
                    <h2>Original title: {movie.original_title}</h2>
                    <img
                        src={`/flags/${movie.original_language}.png`}
                        alt={movie.original_language}
                        onError={(e) => e.target.src = defaultFlag} />
                    <div className="stars">
                        {renderStars(movie.vote_average)}
                    </div>
                </div>
            )}

            {tvSerie && (
                <div className='movieCard' key={tvSerie.id}>
                    <img src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`} alt={tvSerie.title} />
                    <h1>Title: {tvSerie.name}</h1>
                    <h2>Original title: {tvSerie.original_name}</h2>
                    <img
                        src={`/flags/${tvSerie.original_language}.png`}
                        alt={tvSerie.original_language}
                        onError={(e) => e.target.src = defaultFlag} />
                    <div className="stars">
                        {renderStars(movie.vote_average)}
                    </div>
                </div>
            )}
        </>
    );
}