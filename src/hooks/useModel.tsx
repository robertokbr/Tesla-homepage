import React, { createContext, ReactNode } from 'react';

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

export const ModelContext = createContext<IModelsContext>({} as IModelsContext);
