import { Modal } from '../common';
import { FilterFormWithContext } from './filter-form';
import { useAppStore } from '@/store';

export const NewFilterModal = () => {
  const { isFormModalOpen, setIsFormModalOpen } = useAppStore();

  return (
    <Modal
      isOpen={isFormModalOpen}
      onClose={() => setIsFormModalOpen(false)}
      title={'modal.filter.create.title'}
    >
      <FilterFormWithContext />
    </Modal>
  );
};
