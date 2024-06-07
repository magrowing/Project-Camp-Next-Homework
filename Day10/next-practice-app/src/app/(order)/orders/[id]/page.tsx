'use client';

import { useSearchParams } from 'next/navigation';

type TPageProps = {
  params: {
    [key: string]: string;
  };
  searchParams: {
    [key: string]: string;
  };
};

export default function Order({ params, searchParams }: TPageProps) {
  const searchParam = useSearchParams();
  return (
    <article>
      <h1>Orders 상세 : {params.id} page Component</h1>
      <p>{searchParam.get('lang')}</p>
      <p>{searchParam.get('page')}</p>
      <p>{searchParams.lang}</p>
      <p>{searchParams.page}</p>
    </article>
  );
}
