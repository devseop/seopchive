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

export type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  pageContext: {
    allPosts: [];
  };
  location: {
    href: string;
  };
};

export type PostNavigationType = {
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
  };
};
