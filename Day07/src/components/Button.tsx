import { ReactNode } from 'react';

import { RecordType } from '../types';

type ButtonProps = React.ComponentProps<'button'> & {
  btnStyleType: string;
  children: ReactNode;
  style?: RecordType;
};

export default function Button(prop: ButtonProps) {
  const { children, btnStyleType, style, ...restProps } = prop;
  const BtnTypeVariants: RecordType = {
    full: 'bg-primary text-white',
    line: 'bg-white text-primary',
  };
  return (
    <button
      style={style ?? { width: '100%' }}
      className={`${BtnTypeVariants[btnStyleType]} h-[4.4rem] rounded-md border text-md border-primary disabled:bg-gray-500 disabled:cursor-not-allowed`}
      {...restProps}
    >
      {children}
    </button>
  );
}
