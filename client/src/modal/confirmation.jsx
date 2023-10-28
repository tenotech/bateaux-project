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
        <div className="p-4 bg-white rounded-lg shadow-lg" style={{width:400}}>
          <h2 className="text-xl font-semibold mb-2 flex justify-center">Confirmer la réservation</h2>
          <p className="text-gray-700 mb-4 mt-8">Réservation pour: </p>
          <div className="text-gray-700 mb-4 flex justify-between mx-10">
            <span>Date le: </span>
            <span className="font-bold">{date}</span>
          </div>
          <div className="text-gray-700 mb-4 flex justify-between mx-10">
            <span>Nombre de personnes: </span>
            <span className="font-bold">{numbers}</span>
          </div>
          <div className="flex justify-center gap-10 mt-10">
            <button
              onClick={onConfirm}
              className="bg-green-500 text-white p-2 mr-2 rounded hover:bg-green-600"
              style={{width:100}}
            >
              Confirmer
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              style={{width:100}}
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
