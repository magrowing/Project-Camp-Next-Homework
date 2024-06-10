/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import { thumbnail01 } from '../../public/assets/assets';
import { star } from '../../public/assets/assets';

import { TMovie } from '@/type/movie';

export default function MovieCard({ movie }: { movie: TMovie }) {
  const { title, poster_path, vote_average, release_date } = movie;
  return (
    <>
      <div>
        <img
          src={
            `https://image.tmdb.org/t/p/w500${poster_path}` || thumbnail01.src
          }
          alt={`포스터이미지-${title}`}
          className="rounded-md"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={star.src}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {release_date.slice(0, 4)}
          </span>
        </div>
      </div>
    </>
  );
}
