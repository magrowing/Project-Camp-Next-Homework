import { ReactNode, useId } from 'react';

type CheckBoxProps = React.ComponentProps<'input'> & {
  children: ReactNode;
};

export default function CheckBox(props: CheckBoxProps) {
  const { children, ...restInputProps } = props;
  const uuid = useId();
  return (
    <div className="flex items-center relative">
      <input
        type="checkbox"
        id={`input-${uuid}`}
        className={`appearance-none block w-[2rem] h-[2rem] border border-primary rounded-sm mr-[0.8rem] checked:bg-primary peer`}
        {...restInputProps}
      />
      <svg
        className="
        absolute 
        w-[1.6rem] h-[1.6rem] top-[50%] left-[0.2rem] translate-y-[-50%]
        hidden peer-checked:block"
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7991 0.766652C11.7247 0.691687 11.6363 0.632186 11.5388 0.59158C11.4413 0.550975 11.3368 0.530069 11.2312 0.530069C11.1256 0.530069 11.0211 0.550975 10.9236 0.59158C10.8262 0.632186 10.7377 0.691687 10.6634 0.766652L4.70476 6.73325L2.20134 4.22184C2.12414 4.14727 2.03301 4.08863 1.93315 4.04928C1.83329 4.00992 1.72666 3.99062 1.61934 3.99248C1.51202 3.99434 1.40612 4.01731 1.30768 4.0601C1.20924 4.10288 1.12019 4.16464 1.04562 4.24184C0.971042 4.31903 0.912405 4.41017 0.873051 4.51003C0.833697 4.60989 0.814397 4.71652 0.816254 4.82384C0.818111 4.93116 0.841087 5.03706 0.883872 5.1355C0.926657 5.23394 0.988412 5.32299 1.06561 5.39756L4.13689 8.46884C4.21124 8.54381 4.2997 8.60331 4.39717 8.64391C4.49463 8.68452 4.59917 8.70542 4.70476 8.70542C4.81034 8.70542 4.91488 8.68452 5.01234 8.64391C5.10981 8.60331 5.19827 8.54381 5.27262 8.46884L11.7991 1.94238C11.8803 1.86748 11.9451 1.77658 11.9894 1.6754C12.0337 1.57423 12.0566 1.46497 12.0566 1.35451C12.0566 1.24406 12.0337 1.1348 11.9894 1.03362C11.9451 0.932449 11.8803 0.841549 11.7991 0.766652V0.766652Z"
          fill="white"
        />
      </svg>
      <label htmlFor={`input-${uuid}`} className={`text-primary text-md`}>
        {children}
      </label>
    </div>
  );
}
