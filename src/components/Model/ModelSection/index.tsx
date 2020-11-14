import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface ModelSectionProps extends HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
  background: string;
}

const ModelSection: React.FC<ModelSectionProps> = ({
  modelName,
  overlayNode,
  children,
  background,
  ...rest
}) => {
  return (
    <S.Container background={background} {...rest}>
      {children}
    </S.Container>
  );
};

export default ModelSection;
