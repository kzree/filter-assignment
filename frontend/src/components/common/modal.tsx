import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from './text';
import type { Ref } from 'react';
import type { ReactComponent } from '@/types/react';

export type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  title: string;
};

const MODAL_MIN_HEIGHT = 300;
const MODAL_MAX_HEIGHT = 800;

// I would have made only the content scrollable and have the title stay inplace, but due
// to the interesting resizing requirement the scrolling will look ugly.
export const Modal: ReactComponent<ModalProps> = ({ children, onClose, title, isOpen = false }) => {
  const [height, setHeight] = useState(500);
  const [isResizing, setIsResizing] = useState(false);

  const { t } = useTranslation();
  const dialog: Ref<HTMLDialogElement> = useRef(null);
  const startY = useRef(0);
  const startHeight = useRef(0);

  useEffect(() => {
    const dialogElement = dialog.current;
    if (isOpen) {
      if (dialogElement) {
        dialogElement.showModal();
      }
    } else {
      if (dialogElement) {
        dialogElement.close();
      }
    }
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    startY.current = e.clientY;
    startHeight.current = height;
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const deltaY = e.clientY - startY.current;
      const newHeight = Math.max(
        MODAL_MIN_HEIGHT,
        Math.min(MODAL_MAX_HEIGHT, startHeight.current + deltaY),
      );
      setHeight(newHeight);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ns-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing]);

  return ReactDOM.createPortal(
    <dialog
      ref={dialog}
      className="relative top-1/2 left-1/2 -translate-1/2 w-[950px] p-12 rounded bg-white shadow backdrop:bg-black/50 backdrop:backdrop-blur-md"
      style={{ height }}
    >
      {!!onClose && (
        <button
          className="absolute top-8 right-8 font-bold cursor-pointer transition-all hover:bg-gray-400/10 h-7 w-7 grid place-items-center rounded-full"
          onClick={onClose}
        >
          X
        </button>
      )}
      <Text as="h3" size="xl" className="pb-6" bold>
        {t(title)}
      </Text>
      <div>{children}</div>
      <div
        className="fixed bottom-0 left-0 right-0 h-2 cursor-ns-resize transition-colors"
        onMouseDown={handleMouseDown}
        style={{
          background: isResizing ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full" />
      </div>
    </dialog>,
    document.body,
  );
};
