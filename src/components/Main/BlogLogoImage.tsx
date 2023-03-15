import React, { FunctionComponent } from 'react';
// import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type BlogLogoProps = {
  blogLogoImage: IGatsbyImageData;
};

const BlogLogoWapper = styled(GatsbyImage)`
  height: 32px;
`;

const BlogLogoImage: FunctionComponent<BlogLogoProps> = ({ blogLogoImage }) => {
  return <BlogLogoWapper image={blogLogoImage} alt="devseop" />;
};

export default BlogLogoImage;
