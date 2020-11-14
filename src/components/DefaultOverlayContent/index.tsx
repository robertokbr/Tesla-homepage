import React from 'react';

import * as S from './styles';

interface OverlayProps {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<OverlayProps> = ({
  description,
  label,
}) => {
  return (
    <S.Container>
      <S.Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </S.Heading>
    </S.Container>
  );
};

export default DefaultOverlayContent;
