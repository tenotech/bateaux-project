import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-4 text-slate-800'>
        Bateaux Pirates Djerba
      </h1>
      <p className='mb-4 text-slate-700 text-center'>
        Site officiel de réservation.
      </p>
      {currentUser ? (
          <div className='flex gap-5 mt-10 justify-center'>
            <Link to='/booking'>
              <span className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Réservation</span>
            </Link>
            <Link to='/checking'>
              <span className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Vérification</span>
            </Link>
          </div>
        ) : (
          <div className='p-3 max-w-lg mx-auto text-center'>
            <Link to='/sign-in'>
              <span className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Se connecter</span>
            </Link>
        </div>
      )}
      
    </div>
  );
}
