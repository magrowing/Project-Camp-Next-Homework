import { ReactNode } from 'react';

type TailwindButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode;
  style: {
    [key: string]: string;
  };
};

export default function TailwindButton(props: TailwindButtonProps) {
  const { children, style, ...restButtonProps } = props;
  return (
    <button
      style={style}
      {...restButtonProps}
      className="w-[100%] h-[4.4rem] leading-[4.4rem] text-[1.4rem] rounded-[.8rem]"
    >
      {children}
    </button>
  );
}
