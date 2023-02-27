import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type BlogLogoProps = {
  blogLogoImage: IGatsbyImageData;
};

const BlogLogoWapper = styled(GatsbyImage)`
  height: 32px;
`;

const BlogLogoImage: FunctionComponent<BlogLogoProps> = ({ blogLogoImage }) => {
  return (
    <Link to="/">
      <BlogLogoWapper image={blogLogoImage} alt="devseop" />
    </Link>
  );
};

export default BlogLogoImage;
