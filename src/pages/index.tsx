import React, { FunctionComponent } from 'react';
import Navbar from 'components/Main/Navbar';
// import CategoryList, { CategoryListProps } from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';
import Template from 'components/Common/Template';
import { graphql } from 'gatsby';
import { PostListItemType } from 'types/PostItem.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import queryString, { ParsedQuery } from 'query-string';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  // const categoryList = useMemo(
  //   () =>
  //     edges.reduce(
  //       (
  //         list: CategoryListProps['categoryList'],
  //         {
  //           node: {
  //             frontmatter: { categories },
  //           },
  //         }: PostListItemType,
  //       ) => {
  //         categories.forEach((category) => {
  //           if (list[category] === undefined) list[category] = 1;
  //           else list[category]++;
  //         });

  //         list['All']++;

  //         return list;
  //       },
  //       // initialValue
  //       { All: 0 },
  //     ),
  //   // dependency
  //   [],
  // );

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Navbar />
      {/* <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      /> */}
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
      publicURL
    }
  }
`;
