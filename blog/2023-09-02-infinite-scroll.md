---
title: 무한 스크롤 구현하기
date: 2023-09-02
slug: /2023p005
---

프론트엔드 기술 과제에서는 리스트 페이지에서 무한 스크롤을 구현하라는 요구 사항을 본 적이 있다. 나 또한 기술 과제와 [원티드 프리온보딩 인턴십](/wanted-preonboarding-review)을 진행하면서 종종 마주쳤다. 무한 스크롤은 방대한 양의 콘텐츠를 스크롤할 수 있는 기술로 페이지를 아래로 스크롤할 때 새로고침이 되면서 콘텐츠를 추가적으로 불러오는 방법이다. 프론트엔드 개발자라면 피할 수 없는 무한 스크롤에 대해 복습하고 정리하는 차원에서 작성해보기로 했다.

## 무한 스크롤 먼저보기

- [https://github.com/devseop/po-fe-12th-w2](https://github.com/devseop/po-fe-12th-w2)

## 사용한 기술

무한 스크롤을 3가지 방법으로 구현한 경험이 있는데 그 때마다 사용된 기술은 아래와 같다.

- useEffect
- Intersection Observer API
- useInfiniteQuery (React-Query)

## 1. useEffect

`useEffect`를 이용한 방법에서는 현재 스크롤된 위치와 브라우저의 세로 크기, 그리고 콘텐츠의 총 높이를 이용해 구현했다. 여기서 필요한 요소들은 아래와 같다.

- `window.scrollY`: 현재 스크롤의 위치
- `document.documentElement.clientHeight`: 브라우저의 보이는 화면 높이
- `document.documentElement.scrollHeight`: 콘텐츠의 총 높이

<br />

```jsx
useEffect(() => {
  function onScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      //TODO: 추가적인 데이터를 불러오는 로직
    }
  }

  window.addEventListener('scroll', onScroll);

  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}, []);
```

<br />

useEffect를 선언하고 스크롤 이벤트시 수행될 `onScroll` 함수를 작성한다. `window.scrollY + document.documentElement.clientHeight`는 사용자가 보고 있는 페이지의 맨 아래 위치를, `document.documentElement.scrollHeight - 300`은 전체 콘텐츠의 높이에서 300px을 제외한 값을 나타낸다. 위 조건은 **사용자가 페이지의 바닥에 거의 도달했는지를 확인**하는 조건이다. 스크롤 이벤트가 발생하면서 조건이 참이 된다면 그 때 데이터를 불러오도록 하는 방식이다. 그리고 `() => {window.removeEventListener('scroll', onScroll);};`를 반환하도록 하여 컴포넌트가 언마운드될 때 스크롤 이벤트 리스너를 제거하여 추가적인 호출이 진행되지 않도록 한다.

## 2. Intersection Observer API

Intersection Observer API는 관찰 중인 요소(Element)가 사용자가 보고 있는 화면 영역(Viewport) 안에 들어왔는지를 알려주는 API이다. 해당 API는 무한 스크롤시 가장 많이 사용되는 방법이라고 생각하는데, useEffect는 조건을 설정하기 위한 코드가 번잡스럽고 useInfiniteQuery는 React-Query에 내장된 기능으로 해당 기술을 사용하지 않으면 의미가 없기 때문이다.

<br />

나는 Intersection Observer API를 이용하여 커스텀 훅을 만들고 이를 원하는 컴포넌트로 가져와서 사용하는 방식으로 구현했다.

```ts
const useInfinityScroll = (
  callback: () => void,
): React.MutableRefObject<HTMLDivElement | null> => {
  const containerRef = (useRef < HTMLDivElement) | (null > null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        callback();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, callback]);

  return containerRef;
};
```

해당 API를 사용할 때 옵션은 필수가 아니지만 설정해 놓으면 나중에 자세한 조정이 필요할 때 편리하다.

- `root`: 관찰 대상이 화면에 들어왔는지 여부를 감지한다. 기본값은 null이다.
- `rootMargin`: 관찰 대상을 감지하는 영역을 바깥 범위(Margin)까지 확장한다. 기본값은 0px이며 해당 옵션값을 설정할 때는 문자열 형태로 해야한다.
- `threshold`: 관찰 대상이 화면 영역에 얼마나 들어왔을 때 콜백 함수를 호출할지 결정한다. `rootMargin`과 마찬가지로 기본값은 0(0%)이다. 최대 1(100%)까지 설정이 가능하다.

<br />
`IntersectionObserver`의 인스턴스인 `observer`를 선언한다. 이 때 `observer`는 `entries`라는 배열을 인자로 받는다. 그리고 인자의 첫번째 요소(target)이 교차하고 있는지 확인하고 조건이 참이라면 callback() 함수를 호출하여 더 많은 정보를 불러오도록 한다. 첫번째 방법과 마찬가지로 추가적인 호출이 진행되지 않도록 클린업 함수를 반환하도록 한다. 마지막으로 관찰할 대상 요소를 참조하기 위해 선언된 `containerRef`를 반환하도록 한다. 이렇게 작성된 `useInfinityScroll`를 컴포넌트에서 불러와 반환된 `containerRef`를 특정 요소에 연결하면, 해당 요소가 뷰포트에 들어올 때 추가적인 데이터를 불러올 수 있도록 한다.

## 3. useInfiniteQuery (React-Query)

`useInfiniteQuery` 이용한 방법은 한 기업의 기술 과제를 진행하면서 구현했는데 이 때 서버 사이드의 상태와 클라이언트 사이드의 상태를 나누어 관리해보고 싶어서 `React-Query(서버 사이드)`와 `zustand(클라이언트 사이드)`로 나누어 리스트 페이지에서의 무한 스크롤을 구현했다.

```jsx
/* useInfiniteQuery 기본 구조 */
const {
  fetchNextPage,
  fetchPreviousPage,
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,
  ...result
} = useInfiniteQuery({
  queryKey,
  queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
  ...options,
  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
});
```

useInfiniteQuery의 반환 값 중, `fetchNextPage`, `hasNextPage`, `isFetchingNextPage`가 자주 쓰인다.

- `fetchNextPage`: 다음 페이지를 요청할 때 사용되는 메서드
- `hasNextPage`: 다음 페이지가 있는지 판별하는 boolean 값
- `isFetchingNextPage`: 다음 페이지를 불러오는 중인지 판별하는 boolean 값

```tsx
/* useGetArticles.ts */
export const useGetArticles = (filters: FilterValues) => {
  const fetchArticles = async ({ pageParam = 0 }) => {
    const { headline, date, countries } = filters;

    const params: ApiParamsProps = {
      page: pageParam,
    };

    const rawData = await getData(params);
    return getConvertedArticles(rawData);
  };

  return useInfiniteQuery(['articles', filters], fetchArticles, {
    getNextPageParam: (_lastpage, allpage) => {
      const nextOffset = allpage.length + 1;
      return nextOffset;
    },
    retry: 3,
    retryDelay: (retryAttempt) => Math.min(retryAttempt * 1000, 3000),
    staleTime: 5 * 60 * 1000, // 5분 후에 데이터가 오래된 것으로 간주
  });
};

/* ArticleList.tsx */
export const ArticleList = () => {
  const { isVisible } = useToastStore();
  const filters = useFilterStore((state) => state.filters);

  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetArticles(filters);

  const loadingRef = useInfinityScroll(fetchNextPage, hasNextPage ?? false);

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <ErrorPage
        pageText="데이터를 불러오는데 실패했습니다."
        buttonText="새로고침"
      />
    );

  // 검색 결과가 없을 떄
  if (data.pages.flatMap((page) => page).length === 0)
    return (
      <ErrorPage
        pageText="조건에 맞는 기사가 없습니다."
        buttonText="돌아가기"
      />
    );

  return (
    <>
      {isVisible && createPortal(<ToastMessage />, document.body)}
      <SearchFilterBar filterType="article" />
      <ListContainer>
        {data?.pages
          .flatMap((page) => page)
          .map((item: ArticleProps, index: number) => (
            <ArticleListItem key={index} data={item} />
          ))}
        <div ref={loadingRef}>{isFetchingNextPage}</div>
      </ListContainer>
    </>
  );
};
```

데이터를 불러오는 커스텀 훅(useGetArticles.ts)에서 `useInfiniteQeury`를 사용하여 `data`, `isError`, `isLoading`, `fetchNextPage`, `hasNextPage`, `isFetchingNextPage`를 반환한다. 부모 컴포넌트(ArticleList.tsx)에서는 데이터 페칭이 실패한 경우(`isError`)에는 에러 페이지를, 로딩(`isLoading`)시에는 로딩 컴포넌트를 보여준다. 스크롤을 내릴 때 viewport에 진입했는지의 여부를 확인하기 위해 Intersection Observer API를 이용하여 커스텀 훅(useInfinityScroll.ts)을 작성했고 이를 컴포넌트 최하단에 관찰 요소로 적용하여 다음 페이지의 데이터를 가져오도록 했다.

## 느낀 점

- 여러 방법을 통해 구현해봤는데 **화면의 관찰하고 조건이 성립되면 데이터를 불러오는 방식**이 기본임을 알게 됐다.
- `useInfiniteQuery`는 무한 스크롤을 위한 참조까지 가능하다고 생각했으나, 데이터를 불러오기 더 나은 방법일 뿐이다.
- 작성된 코드들을 보면서 좀 더 클린하게 작성할 순 없었는지 아쉬움이 남는다.
- 서비스를 운영하는 기업의 입장에서는 해당 기능이 체류시간의 증가라는 이득을 가져다주지만, 디자이너였던 나에게 무한 스크롤은 액션 자체에 중독시킨다는 디자인 윤리에 대한 문제가 있기도 하다. 언젠가 이런 다크 패턴을 없애는 인터랙션을 개발해보고 싶다.
