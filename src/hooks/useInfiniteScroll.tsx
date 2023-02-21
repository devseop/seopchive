import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { PostListItemType } from 'types/PostItem.types';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

//* IntersectionObserver는 브라우저 API이므로 클라이언트 렌더링시에 사용이 가능하다.
//* 그러나 Gastby는 Node.js 환경에서 build가 진행되므로 브라우저 API를 사용할 수 없다.
//* 따라서 useEffect를 이용하여 처음 렌더링 시에 IntersectionObserver 객체를 생성하여 변수에 담아줄 수 있도록 한다.
const useInfiniteScroll = (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);

  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount((value) => value + 1);

      observer.unobserve(entries[0].target);
    });
  }, []);

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return;

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
