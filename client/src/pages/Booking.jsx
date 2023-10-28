import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import QuantityInput from '../components/NumberInput';
import dayjs from "dayjs";

import { getAvailableBateau0, getBateau } from '../Services/bateaux-services.js';
import ConfirmationModal from '../modal/confirmation';

export default function Booking() {
  const dispatch = useDispatch();
  //const [formData, setFormData] = useState({});
  const [numbers, setNumbers] = useState(1);
  const [date, setDate] = useState(new Date());

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading0, setLoading0] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

  const handleNumberChange = (value) => {
    setNumbers(value);
  };

  const handleDateChange = (value) => {
    setDate(value.format('DD-MM-YYYY'));
  };

  const handleSubmit = () => {
    // Display the confirmation modal
    setIsModalOpen(true);
  };

  const handleConfirmReservation = () => {
    // Handle the form submission here or make an API request
    // Set loading state to show a loading message
    setLoading0(true);

    // Simulate an API request
    setTimeout(() => {
      setLoading0(false);
      setIsModalOpen(false);
      // Continue with your form submission logic
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleSubmitold = async (e) => {
    e.preventDefault();
    const formData = {day: date, reservations: numbers}
    try {
    //   fetch('/api/rooms/available-room', {
    //     method: 'GET', // Use the GET method
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData1),
    //   })
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json(); // Parse the response as JSON
    //     })
    //     .then(data => {
    //       // Handle the JSON data received from the server
    //       console.log(data);
    //     })
    //     .catch(error => {
    //       // Handle any errors, such as network errors or failed responses
    //       console.error('Fetch error:', error);
    //     });
      // const res1 = await fetch(`/api/bateau/available-bateau/`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData1),
      // });
      // console.log(res1);
      const bateauID0 = await getBateau('65382eab8b7d3e23b769be27');
      console.log(bateauID0);
      const bateauID ='65382eab8b7d3e23b769be27';
      const res = await fetch(`/api/bateau/${bateauID}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);  
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Réservation</h1>
      <form className='flex flex-col gap-4 mt-10'>
        <label>
            Réservation pour le:
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='w-full' 
                    label="Sélectionnez une date"
                    onChange={handleDateChange} />
        </LocalizationProvider>
        <label>
            Nombre de places:
        </label>
        <QuantityInput 
            onSelectChange={handleNumberChange}>
        </QuantityInput>
        
        <button onClick={handleSubmit} type='button' className='bg-slate-700 text-white p-3 mt-10 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading0 ? 'Loading...' : 'Réserver'}
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-70">
          <div className="w-96 bg-white p-4 rounded-lg shadow-lg">
            <ConfirmationModal
              isOpen={isModalOpen}
              onConfirm={handleConfirmReservation}
              onClose={handleCloseModal}
              date={date}
              numbers={numbers}
            />
          </div>
        </div>
      )}
    </div>
  );
}
