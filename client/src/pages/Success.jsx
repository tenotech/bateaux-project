import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


export default function Success() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('d');
  const numbers = queryParams.get('n');
  const bateau = queryParams.get('b');

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="print.css" media="print">
        </head>
        <body>
          <div class="ticket printable-ticket">
            <h2>Ticket</h2>
            <p>Date: ${date}</p>
            <p>Nombres: ${numbers}</p>
            <p>Bateau: ${bateau}</p>
            <p>ID: id-123</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className='px-4 py-12 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-4 text-slate-800'>
        Réservation complétée!
      </h1>
      <div className="success-icon flex justify-center my-10">
        <i className="fa-solid fa-circle-check" style={{color: "#0370C5", fontSize: "5rem"}}></i>
      </div>
      <div className="my-10 text-gray-700 mb-4 flex justify-between mx-20">
            <span>Date: </span>
            <span className="font-bold">{date}</span>
      </div>
      <div className="text-gray-700 mb-4 flex justify-between mx-20">
            <span>Nombre de tickets: </span>
            <span className="font-bold">{numbers}</span>
      </div>
      <div className="text-gray-700 mb-4 flex justify-between mx-20">
            <span>Bateau: </span>
            <span className="font-bold">{bateau}</span>
      </div>
      <div className='flex gap-5 mt-10 justify-center'>
        <Link className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' to='/booking'>
          Retourner
        </Link>
        <button onClick={handlePrint} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Imprimer
        </button>
      </div>
    </div>
  );
}
