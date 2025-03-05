export default function MovieCard(props) {

    const { movie } = props;

    return (
        <>
            {
                <div className='movieCard' key={movie.id}>
                    <h1>{movie.title}</h1>
                    <h2>{movie.original_title}</h2>
                    <h2>{movie.original_language}</h2>
                    <h2>{movie.vote_average}</h2>
                </div >

            }
        </>
    );
}