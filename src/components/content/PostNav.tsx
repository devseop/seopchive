import styled from '@emotion/styled';

const PostNav = () => {
  return (
    <NavContainer>
      <h3>post nav</h3>
    </NavContainer>
  );
};

const NavContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  max-width: 360px;
  height: 100vh;
  position: sticky;
  top: 0;
  color: white;
`;

export default PostNav;
