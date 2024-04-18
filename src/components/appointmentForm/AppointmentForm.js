import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input name="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label for="date">Date</label>
        <input name="date" type="date" id="date" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)}/>
        <label for="time">Time</label>
        <input name="time" type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        <ContactPicker contacts={contacts}/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
};
