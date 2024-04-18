import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {

  // State variables for appointment info
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data  
    addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm name={name} contact={contact} date={date} time={time} 
        setName={setName} setContact={setContact} setDate={setDate} setTime={setTime} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments}/>
      </section>
    </div>
  );
};