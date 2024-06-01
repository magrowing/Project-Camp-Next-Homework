import { ReactNode } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;
`;

type StyledButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode;
  style: {
    [key: string]: string;
  };
};

export default function StyledButton(props: StyledButtonProps) {
  const { style, children, ...restButtonProps } = props;
  return (
    <Button style={style} {...restButtonProps}>
      {children}
    </Button>
  );
}
