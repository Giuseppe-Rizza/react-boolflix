export default function MovieCard(movie, tvSerie) {

    const { movie, tvSerie } = props;

    const defaultFlag = "/flags/english.png";

    return (
        <>
            {movie && (
                <div className='movieCard' key={movie.id}>
                    <h1>Title: {movie.title}</h1>
                    <h2>Original title: {movie.original_title}</h2>
                    <img
                        src={`/flags/${movie.original_language}.png`}
                        alt={movie.original_language}
                        onError={(e) => e.target.src = defaultFlag} />
                    <h2>Vote: {movie.vote_average}</h2>
                </div >
            )};

            {tvSerie && (
                <div className='movieCard' key={tvSerie.id}>
                    <h1>Title: {tvSerie.name}</h1>
                    <h2>Original title: {tvSerie.original_name}</h2>
                    <img
                        src={`/flags/${tvSerie.original_language}.png`}
                        alt={tvSerie.original_language}
                        onError={(e) => e.target.src = defaultFlag} />
                    <h2>Vote: {tvSerie.vote_average}</h2>
                </div>
            )};
        </>
    );
}