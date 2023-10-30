import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataTable from '../components/TableData';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

export default function Checking() {
  const { currentUser } = useSelector((state) => state.user);
  const [date, setDate] = useState(new Date());

  const bateauxData = [
    { id: 1, name: "Bateaux 1", max: 30, reserved: 12 },
    { id: 2, name: "Bateaux 2", max: 35, reserved: 10 },
    { id: 3, name: "Bateaux 3", max: 40, reserved: 40 },
    { id: 4, name: "Bateaux 4", max: 25, reserved: 13 },
    { id: 5, name: "Bateaux 5", max: 25, reserved: 20 },
    { id: 6, name: "Bateaux 6", max: 30, reserved: 12 },
    { id: 7, name: "Bateaux 7", max: 35, reserved: 10 },
    { id: 8, name: "Bateaux 8", max: 40, reserved: 40 },
    { id: 9, name: "Bateaux 9", max: 25, reserved: 13 },
    { id: 10, name: "Bateaux 10", max: 25, reserved: 20 },
    { id: 11, name: "Bateaux 11", max: 30, reserved: 12 },
    { id: 12, name: "Bateaux 12", max: 35, reserved: 10 },
    { id: 13, name: "Bateaux 13", max: 40, reserved: 40 },
    { id: 14, name: "Bateaux 14", max: 25, reserved: 13 },
    { id: 15, name: "Bateaux 15", max: 25, reserved: 20 },
    { id: 16, name: "Bateaux 16", max: 25, reserved: 13 },
    { id: 17, name: "Bateaux 17", max: 25, reserved: 20 }
  ];

  const handleDateChange = (value) => {
    setDate(value);
  };


  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-4 text-slate-800'>
        Bateaux Pirates Djerba
      </h1>
      <p className='mt-4 text-slate-700 text-center'>Réservations pour le:</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='w-full' 
                    label="Sélectionnez une date"
                    onChange={handleDateChange}
                    defaultValue={dayjs(date)} />
        </LocalizationProvider>
      <div className="mt-4 text-center flex justify-center">
        <DataTable data={bateauxData}></DataTable>
      </div>
    </div>
  );
}
