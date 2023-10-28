import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal

const ConfirmationModal = ({ isOpen, onClose, onConfirm, date, numbers }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Confirmer la réservation</h2>
          <p className="text-gray-700 mb-4">Êtes-vous sûr de vouloir effectuer cette réservation?</p>
          <p className="text-gray-700 mb-4 font-semibold">le: {date} pour {numbers} personnes</p>
          <div className="flex justify-around">
            <button
              onClick={onConfirm}
              className="bg-green-500 text-white p-2 mr-2 rounded hover:bg-green-600"
            >
              Confirmer
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
