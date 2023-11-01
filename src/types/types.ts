export type PostFrontmatterType = {
  title: string;
  date: string;
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
};

export type PostPageItemType = {
  node: {
    id: string;
    html: string;
    tableOfContents: string;
    frontmatter: PostFrontmatterType;
  };
};

export type NavIconType = {
  [key: string]: JSX.Element;
};
