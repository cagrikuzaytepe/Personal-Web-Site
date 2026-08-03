import { useEffect, useRef } from 'react';

const Modal = ({ selectedImg, closeModal, closeButtonRef, closeLabel, altLabel }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!selectedImg) {
      return undefined;
    }

    const focusableElements = backdropRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleTab = (event) => {
      if (event.key !== 'Tab' || !firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [selectedImg]);

  if (!selectedImg) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={altLabel}
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
        <button
          type="button"
          className="modal-close-button"
          onClick={closeModal}
          ref={closeButtonRef}
          aria-label={closeLabel}
        >
          &times;
        </button>
        <img src={selectedImg} alt={altLabel} />
      </div>
    </div>
  );
};

export default Modal;
