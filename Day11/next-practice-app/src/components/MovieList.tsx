import { getDataList } from '@/api/movieApi';
import { TMovie } from '@/type/movie';

import MovieCard from './MovieCard';

export default async function MovieList({ path }: { path: string }) {
  const { results } = await getDataList(path);

  return (
    <>
      <section className="container mx-auto py-8 text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8 capitalize">
          {path.replaceAll('_', ' ')}
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
          {results &&
            results.map((movie: TMovie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </section>
    </>
  );
}
