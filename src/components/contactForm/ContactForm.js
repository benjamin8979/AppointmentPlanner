import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input name="name" type="text" id="name" value={name} onChange={(e) => {
        setName(e.target.value)
      }}/>
      <label for="phone">Phone Number</label>
      <input name="phone" type="text" id="phone" pattern="^(\([2-9]\d{2}\)|[2-9]\d{2})-?\d{3}-?\d{4}$" value={phone} onChange={(e) => {
        setPhone(e.target.value)
      }}/>
      <label for="email">Email</label>
      <input name="email" type="text" id="email" pattern="^\w+@[a-zA-Z_]+\.[a-zA-Z]+" value={email} onChange={(e) => {
        setEmail(e.target.value)
      }}/>
      <input type="submit" value="Submit"/>
    </form>
    </>
  );
};

