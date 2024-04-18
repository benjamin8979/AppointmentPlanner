import React from "react";

export const ContactPicker = ({contacts, handleChange, value, name}) => {
  return (
    <>
      <select onChange={handleChange} value={value} name={name}>
        <option value="">No Contact Selected</option>
        {
          contacts.map((contact) => <option value={contact.name}>{contact.name}</option>)
        }
      </select>
    </>
  );
};
