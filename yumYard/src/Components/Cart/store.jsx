import React from 'react';
import { create } from 'zustand';

const useStore = create((set) => ({
  objectList: [],
  addObject: (newObject) => set((state) => ({ objectList: [...state.objectList, newObject] })),
}));

export default useStore;