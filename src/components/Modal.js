// src/components/Modal.js - YENİ DOSYA

import React from 'react';

// Modal component'i, seçilen resmi (selectedImg) ve kapatma fonksiyonunu (closeModal) prop olarak alır
const Modal = ({ selectedImg, closeModal }) => {
  // Eğer seçili bir resim yoksa, hiçbir şey gösterme (null render et)
  if (!selectedImg) {
    return null;
  }

  // Modal dışındaki koyu alana tıklandığında da modal'ı kapatmak için bir fonksiyon
  const handleBackdropClick = (e) => {
    // Sadece .modal-backdrop'a tıklandığından emin ol, resme değil
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  return (
    // Koyu arka plan
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {/* Kapatma butonu */}
        <button className="modal-close-button" onClick={closeModal}>
          &times; {/* Bu HTML kodu 'X' işaretini oluşturur */}
        </button>
        {/* Büyütülmüş resim */}
        <img src={selectedImg} alt="Enlarged event view" />
      </div>
    </div>
  );
};

export default Modal;