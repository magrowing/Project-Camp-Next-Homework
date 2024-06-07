'use client';

import { useRouter } from 'next/navigation';

type TPageProps = {
  params: {
    [key: string]: string;
  };
  searchParams: {
    [key: string]: string;
  };
};

export default function Products({ params, searchParams }: TPageProps) {
  const router = useRouter();

  const onClickHandler = () => {
    router.push('/products');
  };

  return (
    <article>
      <h1>상품 목록 상세 page Component</h1>
      <p> 동적경로 : {params.id}</p>
      {searchParams.lang && <p> query String: {searchParams.lang}</p>}
      <button type="button" onClick={onClickHandler}>
        상품 목록 돌아가기
      </button>
    </article>
  );
}
