import styled from '@emotion/styled';
import { INTRODUCE_PARAGRAPH } from '../../constants/constants';

const Intro = () => {
  return (
    <Container>
      <IntroText>{INTRODUCE_PARAGRAPH}</IntroText>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1024px;
  margin: 144px auto 80px;
`;

const IntroText = styled.p`
  /* width: 512px; */

  color: #222;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;

export default Intro;
