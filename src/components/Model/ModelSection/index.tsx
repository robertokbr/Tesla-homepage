import React, { HTMLAttributes, useEffect, useRef } from 'react';
import { useModel } from '../../../hooks/useModel';

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
  const { registerModel } = useModel(modelName);

  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modelRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: modelRef,
      });
    }
  }, [modelName, overlayNode, registerModel]);

  return (
    <S.Container ref={modelRef} background={background} {...rest}>
      {children}
    </S.Container>
  );
};

export default ModelSection;
