import { Modal } from '../common';
import { FilterFormWithContext } from './filter-form';

export const NewFilterModal = () => {
  return (
    <Modal isOpen>
      <FilterFormWithContext />
    </Modal>
  );
};
