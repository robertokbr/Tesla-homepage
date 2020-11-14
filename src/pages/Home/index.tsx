import React, { useMemo } from 'react';
import { car1, car2, car3, car4, car5, car6 } from '../../assets/images/images';
import DefaultOverlayContent from '../../components/DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../../components/Model';

import * as S from './styles';

const Home: React.FC = () => {
  const pages = useMemo(() => {
    return [car1, car2, car3, car4, car5, car6].map((image, index) => ({
      background: image,
      title: `Model ${index}`,
    }));
  }, []);

  return (
    <S.Container>
      <ModelsWrapper>
        <S.ModelContainer>
          {pages.map(page => (
            <ModelSection
              key={page.title}
              background={page.background}
              modelName={page.title}
              overlayNode={
                <DefaultOverlayContent
                  label={page.title}
                  description="Order online for delivery"
                />
              }
            />
          ))}
        </S.ModelContainer>
      </ModelsWrapper>
    </S.Container>
  );
};

export default Home;
