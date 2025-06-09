import styled from 'styled-components';
import css from '../styles/css';
import { SITE_CONFIG } from '../config/site';
import { media } from '../styles/MediaQueries';

//import 시 css 경로 확인
//스타일 css 사용 : ${css.color.primary}
//값 : styles/css.js

const Home = () => {
  return (
    <>
      <Banner>
        <div>
          <BannerTitle>{SITE_CONFIG.name}</BannerTitle>
          <BannerSubTitle>{SITE_CONFIG.description}</BannerSubTitle>
        </div>
      </Banner>
    </>
  );
};

const Banner = styled.div`
  background: linear-gradient(300deg, ${css.color.primary}, ${css.color.white});
  color: ${css.color.white};
  padding: ${css.spacing.s32}, 0;
`;

const BannerTitle = styled.h1`
  font-size: ${css.fontSize.xl};
  font-weight: ${css.fontWeight.bold};

  ${media.md`
    font-size : ${css.fontSize['4xl']};
  `};
`;

const BannerSubTitle = styled.h1`
  font-size: ${css.fontSize.base};

  ${media.md`
    font-size : ${css.fontSize.xl};
  `};
`;

export default Home;
