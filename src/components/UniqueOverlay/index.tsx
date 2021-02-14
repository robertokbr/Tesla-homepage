import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../../hooks/useWrapperModelScroll';

import * as S from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.Burguer />
      </S.Header>

      <S.Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Framer Motion</a>
          </li>
          <li>
            <a href="#">Context API</a>
          </li>
          <li>
            <a href="#">Styled-Components</a>
          </li>
        </ul>
      </S.Footer>
    </S.Container>
  );
};

export default UniqueOverlay;
