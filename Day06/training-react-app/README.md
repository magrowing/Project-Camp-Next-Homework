# 6일차 실습 복습

## 🎯 학습 목표

- CSS Modules, Styled-components, Tailwind CSS 3가지 방식을 사용해서 재사용이 가능한 버튼 컴포넌트 생성

### 조건

- 컴포넌트 1개로 디자인처럼 여러개의 버튼을 생성
- 버튼의넓이(높이는고정), 배경, 색상, 글자색은 자유롭게 변경 가능해야한다. (props 활용)

## 👩🏻‍💻 실습 코드

### CSS Modules

- 🔗 [코드 기록](https://github.com/magrowing/Project-Camp-Next-Homework/commit/b0fb5b9398904e98cfa31339990448210e43ef15)

### styled-components

- 🔗 [코드 기록](https://github.com/magrowing/Project-Camp-Next-Homework/commit/5f846f7d6c297d2922b76ed798b3bcb8c216ce2c)

### Tailwind CSS

- 🔗 [코드 기록](https://github.com/magrowing/Project-Camp-Next-Homework/commit/e7119a45dc3ad9ac583d0b819e391763cadf552e)

## 🤗 결과물

![UI](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fda1xAc%2FbtsHKqJYFBG%2F85yhnSUF5aeC5lUtMx2gkK%2Fimg.png)

## 🔥 실습을 통해 배운점

### 나머지 매개변수를 활용하는 방식

```jsx
import { ReactNode } from 'react';

type TailwindButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode,
  style: {
    [key: string]: string,
  },
};

export default function TailwindButton(props: TailwindButtonProps) {
  const { children, style, ...restButtonProps } = props;
  return <button {...restButtonProps}>{children}</button>;
}
```

### `인덱스 시그니처`를 활용한 타입 지정

```jsx
import { ReactNode } from 'react';

type TailwindButtonProps = React.ComponentProps<'button'> & {
  children: ReactNode,
  style: {
    [key: string]: string, 👈🏻
  },
};
```

### Tailwind CSS 의 동적 클래스 적용 방식

props로 전달받은 style을 동적으로 적용할 수 있을거라고 생각했는데, 이렇게 적용할 수 없다. 클래스의 이름을 동적으로 구성하지말라고 공식문서에 기재되어 있었다.

```jsx
export default function TailwindButton(props: TailwindButtonProps) {
  const { children, style, ...restButtonProps } = props;
  return (
    <button
      {...restButtonProps}
      className={`w-[${style.width}] bg-[${style.backgroundColor}]`}
    >
      {children}
    </button>
  );
}
```
