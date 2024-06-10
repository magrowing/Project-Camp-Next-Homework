import Header from '@/components/Header';
import Banner from '@/components/Banner';
import MovieArea from '@/components/MovieArea';
import SkeletonArea from '@/components/SkeletonArea';

import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Suspense fallback={<SkeletonArea />}>
        <MovieArea />
      </Suspense>
    </>
  );
}
