import { create } from 'zustand';

export type AppConfig = {
  formVisualType: 'page' | 'modal';
  isFormModalOpen: boolean;
  setFormVisualType: (type: 'page' | 'modal') => void;
  setIsFormModalOpen: (isOpen: boolean) => void;
};

export const useAppStore = create<AppConfig>()((set) => ({
  formVisualType: 'modal',
  isFormModalOpen: false,

  setFormVisualType: (type: 'page' | 'modal') => set({ formVisualType: type }),
  setIsFormModalOpen: (isOpen: boolean) => set({ isFormModalOpen: isOpen }),
}));
