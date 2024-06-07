'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const pathList = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/products',
    name: '상품 목록',
  },
  {
    path: '/products/:id',
    name: '상품 목록',
  },
  {
    path: '/products/:id',
    name: '상품 상세',
  },
  {
    path: '/cart',
    name: '장바구니',
  },
  {
    path: '/order',
    name: '주문',
  },
  {
    path: '/order/complete',
    name: '주문 완료 페이지',
  },
  {
    path: '/orders',
    name: '주문 목록',
  },
  {
    path: '/orders/:id',
    name: '주문 상세 페이지',
  },
  {
    path: '/login',
    name: '로그인',
  },
  {
    path: '/singup',
    name: '회원가입',
  },
  {
    path: '/singup/complete',
    name: '회원가입 완료 페이지',
  },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <header>
      <nav>
        <ul className="flex flex-row items-center justify-center gap-4 mb-4">
          {pathList.map((item) => (
            <li
              key={`nav-${item}`}
              className={`${pathName === item.path ? 'font-bold' : ''}`}
            >
              <Link href={item.path}>
                {(pathName === item.path && '✅ ') ?? ''}
                {item.name}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
