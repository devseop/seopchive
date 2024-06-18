---
title: 옆에서 구경만 하는 조용한 친구, useRef
date: 2023-03-10
slug: /2023p003
---

전에 한 기업에서 기술 과제를 할 때 무한스크롤에 대한 기능을 구현하는 파트가 있었습니다. 당시에 저는 useState를 이용한 페이지네이션을 구현한 경험이 유일하여 해당 기능에 대한 이해가 부족했고 결국 과제는 통과하지 못 했었는데요. 해당 기능이 useRef를 이용하여 구현한다는 것을 뒤늦게 알았고 값의 참조을 위한 Hook이라고만 알고 어떻게 이용할 수 있는지에 대한 것은 몰랐었습니다. 그래서 이를 기회로 useRef의 개념과 여러 사용법에 대해 알아보았습니다.

## useRef는 무엇인가?

useRef는 DOM 요소 또는 값에 대한 변경 가능한 참조를 생성할 수 있는 React Hook입니다. useRef는 클래스 구성 요소나 virtual DOM에 의존하지 않고 직접 DOM 노드에 접근하는 방법을 제공합니다. 다음과 같이 useRef를 불러와 사용할 수 있어요.

```javascript
import React, { useRef } from 'react';

const Component = () => {
  const newRef = useRef(null);

  return <div ref={newRef}>Hello, useRef!</div>;
};
```

위 예시는 요소(element)에 대한 참조입니다. 실제 DOM에 `newRef`, `newRef.current` 를 사용하여 요소에 접근하거나 조작이 가능합니다. 또한 useRef는 변경 가능한 값을 저장하는 용도로 사용할 수 있습니다.

```javascript
import React, { useRef } from 'react';

const CounterComponent = () => {
  const counterRef = useRef(0);

  const clickHandler = () => {
    conterRef.current++;
  };

  return <button onClick={clickHandler}>Count is {counterRef.current}</button>;
};
```

위 예시에서는 변경 가능한 값을 참조합니다. `counterRef` 를 통해 변경을 원하는 값에 대한 참조를 선언하고, `clickHandler` 라는 함수를 통해 값을 변경시킬 수 있도록 합니다. 그리고 버튼의 클릭 이벤트가 발생하면 `clickHandler` 가 실행되어 함수 안의 `counterRef` 값이 증가하도록 동작하게 됩니다.

useRef는 전반적으로 **기능적 구성 요소 내에서 DOM 요소 또는 변경 가능한 값에 접근하고 이를 조작하는데 유용한 hook**이라고 할 수 있습니다.

## 응용하기

useRef는 위와 같은 개념을 이용하여 다양한 방법으로 사용되기도 합니다.

### 이전 값 저장하기

property 또는 state의 현재 값과 이전 값을 비교하려는 경우 useRef를 사용하면 이전 값을 저장할 수 있어요. 렌더링을 할 떄마다 선언된 ref의 값을 업데이트하고 현재 값과 이전 값을 비교하는 방식으로 사용할 수 있습니다.

```javascript
import React, { useRef, useEffect } from 'react';

const CompareComponent = (props) => {
  const prevRef = useRef(null);

  useEffect(() => {
    prevRef.current = props;
  });

  const didPropsChange = prevRef.current !== props;

  return <p>{didPropsChange ? 'Props changed!' : 'Props did not change.'}</p>;
};
```

위 예시에서 useEffect는 현재 props 값으로 모든 렌더링에서 ref를 업데이트합니다. 그리고 현재 props를 이전 props와 비교하여 변수를 계산합니다. 계산 후에 props가 변경됐다면 'Props changed!'를 그대로라면 'Props did not change.'를 화면에 띄우게 됩니다.

### 렌더링 도중에 값을 유지하기

두번째로 렌더링 도중에 값을 유지하는 방법으로도 사용될 수 있습니다. 이는 스크롤의 위치나 애니메이션의 상태가 변경될 때 다시 렌더링이 트리거 되지 않아야 하는 값을 저장하려고 할 때 유용하게 사용할 수 있어요.

```javascript
import React, { useRef, useState } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositionRef = useRef(0);

  const scrollHandler = () => {
    const newScrollPosition = window.scrollY;
    setScrollPosition(newScrollPosition);
    scrollPositionRef.current = newScrollPosition;
  };

  return (
    <div>
      <p>Scroll position: {scrollPosition}</p>
      <button onClick={scrollHandler}>Scroll to top</button>
    </div>
  );
};
```

위 예시에서 `scrollPositionRef` 는 스크롤 위치에 대한 값를 참조합니다. `ScorllHandler` 함수는 `newScrollPostion` 변수로 현재 화면의 스크롤 위치를 확인하고, 새로운 스크롤 위치로 state와 ref 값을 모두 업데이트합니다. 이렇게 하면 렌더링 간에 스크롤 위치는 유지되지만 상태에 대한 업데이트만 다시 렌더링을 유발하게 됩니다.

### 포커싱 관리

마지막으로 useRef는 구성 요소 내에서 포커스를 관리하는 데에 사용할 수 있습니다. 포커싱할 수 있는 요소에 대해 useRef를 선언하고 이를 이용하여 원하는 요소에 포커싱하거나 또는 그 반대로 동작할 수 있도록 하는 방식이에요.

```javascript
import React, { useRef } from 'react';

const FocusingComponent = () => {
  const inputRef = useRef(null);

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={clickHandler}>Focus input</button>
    </div>
  );
};
```

위 예시에서 `inputRef` 는 입력 요소에 대해 참조합니다. `clickHandler` 함수는 버튼을 클릭할 때 입력 요소에 대해 포커싱을 하게 됩니다.

## 정리하자면

useRef는 변경 가능한 값을 저장하고, DOM 요소에 대한 참고를 만들고, 포커스를 관리하고, 렌더링 간에 값을 유지하는 등 전반적으로 **어떤 값을 유지할 수 있도록 하는 작업에 사용할 수 있는 다목적 Hook**이라고 정리할 수 있을 것 같습니다. 모두 다 같은 선언이지만 그 용도에 따라 ref의 유형이 달라지기 때문에 특히 TypeScript를 같이 사용하는 프로젝트에서는 ref의 용도와 값을 정확하게 파악하고 이를 담을 수 있는 유형에 대한 선언이 중요하다고 생각합니다.
