import React from "react";
import Header from "./Navbar/Header";
import { useState } from "react";
export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return (
    <>
      <Header />
    </>
  );
};
