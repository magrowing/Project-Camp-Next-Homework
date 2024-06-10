import MovieList from './MovieList';

export default async function MovieArea() {
  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <MovieList path="now_playing" />
        <MovieList path="popular" />
        <MovieList path="top_rated" />
        <MovieList path="upcoming" />
      </article>
    </>
  );
}
