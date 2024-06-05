/* eslint-disable react-refresh/only-export-components */
import { ReactNode, memo } from 'react';

import { RecordType } from '../types';

type ButtonProps = React.ComponentProps<'button'> & {
  btnStyleType: string;
  children: ReactNode;
  style?: string;
};

const BtnTypeVariants: RecordType = {
  full: 'bg-primary text-white',
  line: 'bg-white text-primary',
};

function Button(prop: ButtonProps) {
  const { children, btnStyleType, style, ...restProps } = prop;
  return (
    <button
      className={`${BtnTypeVariants[btnStyleType]} ${
        style ?? 'w-[100%]'
      } h-[4.4rem] rounded-md border text-md border-primary`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default memo(Button);
