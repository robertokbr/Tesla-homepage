import React, { useCallback, useContext, useRef, useState } from 'react';
import { CarModel, ModelContext } from '../../../hooks/useModel';

import { Container } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model]);
  }, []);

  const unregisterModel = useCallback(
    (carName: string) => {
      const filteredModels = registeredModels.filter(
        register => register.modelName !== carName,
      );

      setRegisteredModels(filteredModels);
    },
    [registeredModels],
  );

  const getModelByName = useCallback(
    (carName: string) => {
      return registeredModels.find(model => model.modelName === carName);
    },
    [registeredModels],
  );

  return (
    <ModelContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>{children}</Container>
    </ModelContext.Provider>
  );
};

export default ModelsWrapper;
