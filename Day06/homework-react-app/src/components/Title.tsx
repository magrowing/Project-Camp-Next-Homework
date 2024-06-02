import { ReactNode } from 'react';

import { RecordType } from '../types';

type TitleProps = {
  type: string;
  children: ReactNode;
};

export default function MainTitle({ children, type }: TitleProps) {
  const typeVariants: RecordType = {
    main: 'text-lg font-bold mb-[1rem]',
    sub: 'text-md mb-[1rem] mb-[2rem]',
  };

  if (type === 'main') {
    return <h2 className={`text-primary ${typeVariants[type]}`}>{children}</h2>;
  }

  return <p className={`text-primary ${typeVariants[type]}`}>{children}</p>;
}
