import { RecordType } from '../types';

type TextFieldProps = React.ComponentProps<'input'> & {
  style?: RecordType;
};

export default function TextField(prop: TextFieldProps) {
  const { style, ...restProps } = prop;
  return (
    <input
      style={style ?? { width: '100%' }}
      className={`h-[4.4rem] border border-primary rounded-md text-md text-primary placeholder:text-third px-[1.6rem] py-[1.3rem]`}
      {...restProps}
    />
  );
}
