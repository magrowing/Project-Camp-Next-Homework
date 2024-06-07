'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const onClickHandler = () => {
    router.replace('/');
  };

  return (
    <article>
      <h1>Join Complete page Component</h1>
      <button type="button" onClick={onClickHandler}>
        홈으로 가면 되돌아 오지 않기!
      </button>
    </article>
  );
}
