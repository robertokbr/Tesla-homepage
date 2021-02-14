import React from 'react';

import * as S from './styles';

interface OverlayProps {
  label: string;
}

const DefaultOverlayContent: React.FC<OverlayProps> = ({ label }) => {
  return (
    <S.Container>
      <S.Heading>
        <h1>{label}</h1>
        <h2>
          Order Online for
          <span>Touchless Delivery</span>
        </h2>
      </S.Heading>
      <S.Buttons>
        <button type="button">Custom order</button>
        <button type="button" className="white">
          Existing inventory
        </button>
      </S.Buttons>
    </S.Container>
  );
};

export default DefaultOverlayContent;
