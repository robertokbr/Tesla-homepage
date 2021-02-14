import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react';

export interface CarModel {
  modelName: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface IModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel(model: CarModel): void;
  unregisterModel(modelName: string): void;
  getModelByName(modelName: string): CarModel | undefined;
}

const ModelContext = createContext<IModelsContext>({} as IModelsContext);

function useModel(modelName: string) {
  const {
    getModelByName,
    registerModel,
    wrapperRef,
    unregisterModel,
  } = useContext(ModelContext);

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);

  return { registerModel, getModel, wrapperRef };
}

export { ModelContext, useModel };
