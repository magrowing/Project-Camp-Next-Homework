type TInputProps = React.ComponentProps<'input'> & {
  style?: string;
};

const Input = (props: TInputProps) => {
  const { style, ...restProps } = props;
  return (
    <>
      <input
        {...restProps}
        className={`w-[100%] h-11 border border-[#4F4F4F] rounded-lg py-[13.5px] px-4 text-sm placeholder:text-[#acacac] ${style}`}
      />
    </>
  );
};
export default Input;
