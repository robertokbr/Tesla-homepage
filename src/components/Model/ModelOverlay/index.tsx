import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ModelSection } from '..';
import { CarModel } from '../../../hooks/useModel';
import useWrapperScroll from '../../../hooks/useWrapperModelScroll';

import * as S from './styles';

interface ModelOverlayProps {
  model: CarModel;
}

type SectionDimension = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>;

const ModelOverlay: React.FC<ModelOverlayProps> = ({ children, model }) => {
  const getSectionDimentions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimension;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimension>(
    getSectionDimentions(),
  );

  const { scrollY } = useWrapperScroll();

  const sectionScrollProgress = useTransform(
    scrollY,
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight,
  );

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0],
  );

  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none',
  );

  useLayoutEffect(() => {
    function onResize() {
      const data = getSectionDimentions();
      window.requestAnimationFrame(() => setDimensions(data));
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [getSectionDimentions]);

  return (
    <S.Container style={{ opacity, pointerEvents }}>{children}</S.Container>
  );
};

export default ModelOverlay;
