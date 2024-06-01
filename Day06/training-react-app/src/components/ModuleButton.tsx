import { ReactNode } from 'react';

import styles from './ModuleButton.module.css';

type ModuleButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode;
  style: {
    [key: string]: string;
  };
};

export default function ModuleButton(props: ModuleButtonProps) {
  const { children, style, ...restButtonProps } = props;
  return (
    <button style={style} className={styles.moduleBtn} {...restButtonProps}>
      {children}
    </button>
  );
}
