import React from 'react';

const Ticket = ({ date, id }) => {
  return (
    <div className="ticket printable-ticket">
      <h2>Ticket</h2>
      <p>Date: {date}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Ticket;